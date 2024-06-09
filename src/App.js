import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <ProductList
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            cartItems={cartItems}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
