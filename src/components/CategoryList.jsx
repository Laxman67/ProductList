import { images } from '@/assets/images'; // Adjust path as needed
import { getAllProducts, getCategorisedProduct } from '@/store/productSlice';
import { useEffect, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { products } = useSelector((state) => state.product);

  // Function to handle category selection
  const handleCategory = (slug) => {
    setSelectedCategory(slug);

    // If selected then remove and make it empty
    if (selectedCategory) {
      setSelectedCategory('');
      dispatch(getAllProducts());
    } else {
      dispatch(getCategorisedProduct(slug));
    }
  };
  const dispatch = useDispatch();

  useEffect(() => {}, [products, selectedCategory, dispatch]);

  return (
    <div className='container'>
      {Object.keys(images).map((key) => (
        <div
          key={key} // Use key instead of index for uniqueness
          style={{ marginBottom: '20px' }}
          className={'image-container'}
          onClick={() => handleCategory(images[key].slug)} // Pass slug to handleCategory
        >
          {/* Display the image if it exists */}
          {images[key].image && (
            <img
              src={images[key].image}
              alt={images[key].slug}
              className={`${
                selectedCategory === images[key].slug ? 'active' : ''
              }`}
            />
          )}
          {/* Display the slug */}
          <p>{images[key].slug}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(CategoryList);
