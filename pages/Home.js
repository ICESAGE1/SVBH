import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Order Food & Groceries</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;

