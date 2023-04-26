import {
  ButtonCart,
  ButtonX,
  Header as Container,
  ContainerCart,
} from "./styles";

import { Cart } from "../Cart";
import Image from "next/future/image";
import Link from "next/link";
import logoImg from "../../assets/logo.svg";
import shopIcon from "../../assets/shop_icon.svg";
import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

export function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const { cartDetails } = useShoppingCart();

  const counter = Object.keys(cartDetails).length;

  return (
    <Container>
      <Link href="/">
        <span>
          <Image src={logoImg} alt="" />
        </span>
      </Link>
      <ButtonCart type="view" onClick={() => setIsOpenCart(true)}>
        <Image src={shopIcon} alt="" />
        {counter > 0 && <span>{counter}</span>}
      </ButtonCart>
      {isOpenCart && (
        <ContainerCart>
          <header>
            <h2>Sacola de Compras</h2>
            <ButtonX onClick={() => setIsOpenCart(false)}>X</ButtonX>
          </header>
          <Cart visible={isOpenCart} />
        </ContainerCart>
      )}
    </Container>
  );
}
