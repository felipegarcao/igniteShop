import "keen-slider/keen-slider.min.css";

import { HomeContainer, Product } from "../styles/pages/home";

import { ButtonCart } from "../components/Header/styles";
import { GetStaticProps } from "next";
import Image from "next/future/image";
import Link from "next/link";
import Stripe from "stripe";
import shopIcon from "../assets/shop_icon.svg";
import { stripe } from "../lib/stripe";
import { useKeenSlider } from "keen-slider/react";
import { useShoppingCart } from "use-shopping-cart";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    currency: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  const { addItem } = useShoppingCart();

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Link href={`/product/${product.id}`}>
            <div>
              <Image src={product.imageUrl} alt="" width={480} height={480} />
            </div>
          </Link>
          <footer>
            
            <div>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </div>

            <ButtonCart
              type="add"
              onClick={() => addItem(product)}
              aria-label={`Add ${product.name} to your cart`}
            >
              <Image src={shopIcon} alt="" />
            </ButtonCart>

          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      currency: "BRL",
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2horas
  };
};