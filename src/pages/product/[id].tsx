import { GetStaticPaths, GetStaticProps } from "next";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

import Image from 'next/future/image'
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {useShoppingCart} from 'use-shopping-cart'

export interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string,
    defaultPriceId: string,
    sku: string,
    currency: 'BRL',
  }
}

export default function Product({ product }: ProductProps) {

  const { addItem } = useShoppingCart();
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={() => addItem(product)}>
          Produto no carrinho
          {/* {isProductAlreadyInCart
            ? ''
            : 'Colocar na sacola'
          } */}
        </button>
      </ProductDetails>
    </ProductContainer>
 
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_MLH5Wy0Y97hDAC" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
  };
};
