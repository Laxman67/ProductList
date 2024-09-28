import React from 'react';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <h1>Product Listing</h1>
      <SearchBar />
      <CategoryList />
      <ProductList />
    </div>
  );
};

export default App;
