import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, setSelectedCategory } from '../store/actions';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <div>
      <h3>Categories</h3>
      <ul>
        <li onClick={() => handleCategorySelect('')}>All</li>
        {categories.map(category => (
          <li
            key={category}
            onClick={() => handleCategorySelect(category)}
            style={{ fontWeight: selectedCategory === category ? 'bold' : 'normal' }}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
