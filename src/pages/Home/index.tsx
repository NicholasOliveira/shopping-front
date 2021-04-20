import React, { useState, useEffect } from 'react';
import ProductItem from './Components/ProductItem';
import Loading from '../../Components/Loading';
import { useProduct } from '../../Contexts/Product';
import { Container, ProductList } from './home.styles';
import apiData from '../../converter/apiData';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { Product, setProduct } = useProduct();
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const result: any = await apiData();
        setProduct(result);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [setProduct]);
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <ProductList>
          {Product.map((Product) => (
            <ProductItem key={Product.id} {...Product} />
          ))}
        </ProductList>
      )}
    </Container>
  );
};

export default Home;
