import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, selectedCategory, searchQuery } = useSelector(state => state.products);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory, searchQuery, 10, 0));
    setSkip(10);
  }, [selectedCategory, searchQuery, dispatch]);

  const loadMoreProducts = () => {
    dispatch(fetchProducts(selectedCategory, searchQuery, 10, skip));
    setSkip(skip + 10);
  };

  return (
    <div>
      <h3>Products</h3>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <button onClick={loadMoreProducts}>Load More</button>
    </div>
  );
};

export default ProductList;
