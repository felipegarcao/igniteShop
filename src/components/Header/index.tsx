import { ButtonCart, ButtonX, Header as Container, ContainerCart } from "./styles";

import Image from "next/future/image";
import logoImg from "../../assets/logo.svg";
import shopIcon from "../../assets/shop_icon.svg";
import { useState } from "react";
import { Cart } from "../Cart";

export function Header() {
  const [isOpenCart, setIsOpenCart] = useState(false);

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
          <Cart visible={isOpenCart} />
        </ContainerCart>
      )}
    </Container>
  );
}
