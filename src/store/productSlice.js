import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: true,
  error: null,
  message: null,
  products: [],
  skip: 0,
  limit: 10,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProductsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getAllProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    getAllProductsFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getPaginatedRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getPaginatedSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    getPaginatedFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getCategoryProductRequest(state) {
      state.loading = true;
      state.error = null;
    },
    getCategoryProductSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    },
    getCategoryProductFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updatePagination(state, action) {
      state.skip = action.payload.skip;
      state.limit = action.payload.limit;
    },
    clearAllErrors(state) {
      state.error = null;
    },
  },
});

const { updatePagination } = productSlice.actions;

export const getAllProducts = () => async (dispatch) => {
  dispatch(productSlice.actions.getAllProductsRequest());
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=${initialState.limit}&skip=${initialState.skip}`
    );
    dispatch(productSlice.actions.getAllProductsSuccess(data.products));
  } catch (error) {
    dispatch(productSlice.actions.getAllProductsFailed(error.response));
  }
};

export const getPaginatedForwardData = () => async (dispatch, getState) => {
  const { product } = getState();
  dispatch(productSlice.actions.getPaginatedRequest());
  try {
    const newSkip = product.skip + product.limit; //0+10 = 10 // 10+10=20
    dispatch(updatePagination({ skip: newSkip, limit: product.limit }));
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=${product.limit}&skip=${newSkip}`
    );
    dispatch(productSlice.actions.getPaginatedSuccess(data.products));
  } catch (error) {
    dispatch(productSlice.actions.getPaginatedFailed(error.response));
  }
};

export const getPaginatedBackData = () => async (dispatch, getState) => {
  const { product } = getState();
  dispatch(productSlice.actions.getPaginatedRequest());
  try {
    const newSkip = Math.max(product.skip - product.limit, 0);
    dispatch(updatePagination({ skip: newSkip, limit: product.limit }));
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=${product.limit}&skip=${newSkip}`
    );
    dispatch(productSlice.actions.getPaginatedSuccess(data.products));
  } catch (error) {
    dispatch(productSlice.actions.getPaginatedFailed(error.response));
  }
};

export const getProductName = (inputSearch) => async (dispatch, getState) => {
  const { product } = getState();

  if (inputSearch.trim()) {
    const filteredProducts = product.products.filter((el) =>
      el.title.toLowerCase().includes(inputSearch.toLowerCase())
    );

    dispatch(productSlice.actions.getAllProductsSuccess(filteredProducts));
  } else {
    // Reset filtered products if inputSearch is empty
    dispatch(productSlice.actions.getAllProductsSuccess(product.products));
  }
};

export const getCategorisedProduct =
  (category) => async (dispatch, getState) => {
    const { product } = getState();
    dispatch(productSlice.actions.getCategoryProductRequest());
    try {
      const { data } = await axios.get(
        category
          ? `https://dummyjson.com/products/category/${category}?limit=${product.limit}&skip=${product.skip}`
          : `https://dummyjson.com/products?limit=${product.limit}&skip=${product.skip}`
      );

      dispatch(productSlice.actions.getCategoryProductSuccess(data.products));
    } catch (error) {
      dispatch(productSlice.actions.getCategoryProductFailed(error.response));
    }
  };

export default productSlice.reducer;
