import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import productSlice from './productSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
