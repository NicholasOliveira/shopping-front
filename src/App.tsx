import React, { useState } from 'react';
import { ProductContext } from './Contexts/Product';
import { CartContext } from './Contexts/Cart';
import { Products } from './Interfaces/Products';
import Routes from './Routes/Routes';

function App() {
  const [Product, setProduct] = useState<Products>([]);
  const [Cart, setCart] = useState<Products>([]);

  return (
    <ProductContext.Provider
      value={{ Product, setProduct }}>
      <CartContext.Provider value={{ Cart, setCart }}>
        <Routes />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
