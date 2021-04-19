import React, { useState } from 'react';
import Home from './pages/Home';
import {
  ProductContext,
  ProductsObj,
} from './Contexts/Product';
import { CartContext, CartObj } from './Contexts/Cart';

function App() {
  const [Product, setProduct] = useState(ProductsObj);
  const [Cart, setCart] = useState(CartObj);
  return (
    <div className="App">
      <ProductContext.Provider
        value={{
          Product,
          setProduct,
        }}>
        <CartContext.Provider
          value={{
            Cart,
            setCart,
          }}>
          <Home />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
