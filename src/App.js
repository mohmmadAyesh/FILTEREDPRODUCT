// App.js
import { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  const categories = ["all","Electronics","Clothing","Books"];
  const [products] = useState([
    { name: "Laptop", category: "Electronics", price: 999.99 },
    { name: "Smartphone", category: "Electronics", price: 699.99 },
    { name: "T-shirt", category: "Clothing", price: 19.99 },
    { name: "Jeans", category: "Clothing", price: 49.99 },
    { name: "Headphones", category: "Electronics", price: 149.99 },
    { name: "Book", category: "Books", price: 9.99 },
    { name: "Sneakers", category: "Clothing", price: 79.99 },
    { name: "Tablet", category: "Electronics", price: 299.99 },
  ]);

  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product => product.category === activeFilter);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="container">
      <h1>Filterable Product List</h1>
      <ProductList
        products={filteredProducts}
        activeFilter={activeFilter}
        categories={categories}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
