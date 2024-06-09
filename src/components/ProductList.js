import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
  { id: 2, name: 'Special Item', price: '$18.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', onSale: true, originalPrice: '$20.00' },
  { id: 3, name: 'Sale Item', price: '$25.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', onSale: true, originalPrice: '$50.00' },
  { id: 4, name: 'Popular Item', price: '$40.00', imageUrl: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg' },
];

function ProductList({ onAddToCart, onRemoveFromCart, cartItems }) {
  return (
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      {products.map(product => (
        <div className="col mb-5" key={product.id}>
          <Product
            product={product}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
            inCart={cartItems.some(item => item.id === product.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
