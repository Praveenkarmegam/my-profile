import React from 'react';

function Product({ product, onAddToCart, onRemoveFromCart, inCart }) {
  return (
    <div className="card h-100">
      {product.onSale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
      <img className="card-img-top" src={product.imageUrl} alt={product.name} />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{product.name}</h5>
          {product.onSale && <span className="text-muted text-decoration-line-through">{product.originalPrice}</span>}
          {` ${product.price}`}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {inCart ? (
            <button className="btn btn-outline-dark mt-auto" onClick={() => onRemoveFromCart(product)}>Remove from Cart</button>
          ) : (
            <button className="btn btn-outline-dark mt-auto" onClick={() => onAddToCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
