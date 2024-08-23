import React from 'react';

function ProductItem({ product }) {
  const addToCart = () => {
    // Logic to add item to cart
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;

