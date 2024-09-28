import CategoryList from './components/CategoryList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <>
      <ToastContainer />
      <CategoryList />
      <ProductList />
    </>
  );
};
export default App;
