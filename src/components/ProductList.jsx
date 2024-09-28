import {
  getAllProducts,
  getPaginatedBackData,
  getPaginatedForwardData,
} from '@/store/productSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ProductList = () => {
  const { products, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handlePaginationBack = () => {
    dispatch(getPaginatedBackData());
  };

  const handlePaginationForward = () => {
    dispatch(getPaginatedForwardData());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch(getAllProducts());
  }, [dispatch, error]);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Products</h3>
      <div className='product-container'>
        {products &&
          products.map((element) => (
            <div key={element.id} className='product'>
              <span className='tag'>{element.category}</span>
              <img
                src={element.thumbnail}
                style={{ width: '100px' }}
                alt={element.title}
              />
              <h4>{element.title}</h4>
              <div
                style={{
                  marginTop: '5px',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                }}
              >
                Price: <b>${element.price}</b>
                Rating:{' '}
                <i>
                  <b>{element.rating}</b>
                </i>
              </div>
            </div>
          ))}
      </div>

      <div className='paginition'>
        <button onClick={handlePaginationBack}>
          <img
            src='https://img.icons8.com/?size=100&id=98961&format=png&color=000000'
            alt='Previous'
          />
        </button>
        |
        <button onClick={handlePaginationForward}>
          <img
            src='https://img.icons8.com/?size=100&id=98968&format=png&color=000000'
            alt='Next'
          />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
