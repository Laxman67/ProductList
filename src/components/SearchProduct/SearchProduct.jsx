import { useState, useCallback } from 'react';
import debounce from 'debounce';
import './SearchProduct.css';
import { useDispatch } from 'react-redux';
import { getAllProducts, getProductName } from '@/store/productSlice';

const SearchProduct = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const debouncedSearch = useCallback(
    debounce((search) => {
      if (search) {
        dispatch(getProductName(search));
      } else {
        dispatch(getAllProducts()); // Dispatch action to get all products
      }
    }, 100),
    [dispatch]
  );

  // Handle the input change and pass it to the debounced function
  const handleInputChange = (e) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className='search-product-container'>
      <input
        onChange={handleInputChange}
        type='text'
        value={search}
        placeholder='Enter Product name...'
        className='search-input'
      />
    </div>
  );
};

export default SearchProduct;
