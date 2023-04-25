import {
  BackgroundImage,
  ButtonCart,
  ButtonFinishPurchase,
  ButtonRemove,
  ButtonX,
  Header as Container,
  ContainerCart,
  Flex,
  InfoProduct,
  WrapperCart,
} from "./styles";

import Image from "next/future/image";
import logoImg from "../../assets/logo.svg";
import shopIcon from "../../assets/shop_icon.svg";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

export function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { cartDetails, removeItem, cartCount } = useShoppingCart();

  let total = 0;
  Object.keys(cartDetails).map((cartItem) => {
    const precoString = cartDetails[cartItem].price.toString();
    const precoNumero = parseInt(
      precoString.replace("R$", " ").replace(",", "")
    );
    total += precoNumero;
  });

  const totalFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total / 100);

  return (
    <Container>
      <Image src={logoImg} alt="" />
      <ButtonCart type="view" onClick={() => setIsOpenCart(true)}>
        <Image src={shopIcon} alt="" />
      </ButtonCart>
      {isOpenCart && (
        <ContainerCart>
          <header>
            <h2>Sacola de Compras</h2>
            <ButtonX onClick={() => setIsOpenCart(false)}>X</ButtonX>
          </header>

          <section>
            {Object.keys(cartDetails).map((cartItem) => (
              <WrapperCart key={cartItem}>
                {cartDetails[cartItem].imageUrl ? (
                  <BackgroundImage>
                    <Image
                      src={cartDetails[cartItem].imageUrl}
                      width={90}
                      height={90}
                      alt=""
                    />
                  </BackgroundImage>
                ) : (
                  <span></span>
                )}

                <InfoProduct>
                  <span>{cartDetails[cartItem].name}</span>
                  <strong>{cartDetails[cartItem].price}</strong>
                  <ButtonRemove
                    onClick={() => removeItem(cartDetails[cartItem].id)}
                  >
                    Remover
                  </ButtonRemove>
                </InfoProduct>
              </WrapperCart>
            ))}
            <footer>
              <Flex>
                <span>Quantidade</span>
                <span>{cartCount} Itens</span>
              </Flex>

              <Flex>
                <strong>Valor Total</strong>
                <strong>{totalFormatted}</strong>
              </Flex>

              <ButtonFinishPurchase>Finalizar compra</ButtonFinishPurchase>
            </footer>
          </section>
        </ContainerCart>
      )}
    </Container>
  );
}
