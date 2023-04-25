import { useShoppingCart } from "use-shopping-cart";
import { BackgroundImage, ButtonFinishPurchase, ButtonRemove, Flex, InfoProduct, WrapperCart } from "./styles";
import Image from "next/future/image";


interface CartProps {
  visible: boolean;
}

export function Cart({ visible }: CartProps) {

  const { cartDetails, removeItem, cartCount, totalPrice } = useShoppingCart();

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
    <>
      {visible ? (
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

              <ButtonFinishPurchase disabled={cartCount === 0}>Finalizar compra</ButtonFinishPurchase>
            </footer>
          </section>
      ) : (
        <span></span>
      )}
    </>
  );
}
