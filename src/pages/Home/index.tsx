import React from "react";
import Header from "../../Components/Header";
import ProductItem from "./Components/ProductItem";
import { useProduct } from "../../Contexts/Product";

import { Container, ProductList } from "./home.styles";

const Home: React.FC = () => {
  const { Product } = useProduct();
  return (
    <Container>
      <Header />
      <ProductList>
        {Product.map((Product) => (
          <ProductItem key={Product.id} {...Product} />
        ))}
      </ProductList>
    </Container>
  );
};

export default Home;
