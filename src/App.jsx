import CategoryList from './components/CategoryList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ProductList from './components/ProductList';
import SearchProduct from './components/SearchProduct/SearchProduct';

const App = () => {
  return (
    <>
      <ToastContainer />
      <CategoryList />
      <SearchProduct />
      <ProductList />
    </>
  );
};
export default App;
