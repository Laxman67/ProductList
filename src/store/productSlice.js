import { createSlice } from "@reduxjs/toolkit";
import { fakeBaseQuery } from "@reduxjs/toolkit/query";
import axios from "axios";

// https://dummyjson.com/products/category/{category}?select=id,title,price
//https://dummyjson.com/products/categories

/*
=================================================

// Define default parameters
const limit = 10;  // Fetch 10 items per request
const skip = 20;   // Skip 20 items (can change based on pagination)
const searchTerm = 'phone';  // Search query term

// Construct the URL dynamically
const apiUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&search?q=${searchTerm}`;

// Fetch data from the constructed URL
const fetchProducts = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);  // Handle the data received
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
====================================CATEGORY LIS ================
beauty, fragrances, furniture, groceries, home-decoration,
 kitchen-accessories, laptops, mens-shirts, mens-shoes, mens-watches,
  mobile-accessories, motorcycle, skin-care, smartphones, sports-accessories, 
  sunglasses, tablets, tops, vehicle, womens-bags

*/

const BACKEND_URL = `https://dummyjson.com/products`

const initialState = {
  loading: true,
  error: null,
  message: null,
  products: [],
  categories: '',
  page: 1,
  limit: 10,
  total: 0


}
const productSlice = createSlice(
  {
    name: 'product',
    initialState,
    reducers: {
      getAllProductsRequest(state, action) {
        state.loading = true;
        state.error = null;
        state.error = [];
      },
      getAllProductsSuccess(state, action) {
        state.loading = false;
        state.error = null;
        state.products = action.payload

      },
      getAllProductsFailed(state, action) {
        state.loading = false;
        state.error = action.payload;

      },
      addCategoryRequest(state, action) {
        this.error = null;
        this.categories = null;
        this.loading = true
      },
      addCategorySuccess(state, action) {
        this.error = null;
        this.categories = action.payload;
        this.loading = false
      },
      addCategoryFailes(state, action) {
        this.error = true;
        this.loading = false
      },
      getCategoryRequest(state, action) { },
      getCategorySuccess(state, action) { },
      getCategoryFailes(state, action) { },
      clearAllErrors(state) {
        state.error = null
      }

    }

  }
)



export const getAllProducts = () => async (dispatch) => {

  dispatch(productSlice.actions.getAllProductsRequest())
  try {
    const { data } = await axios.get(`${BACKEND_URL}`)



    dispatch(productSlice.actions.getAllProductsSuccess(data.products))
    dispatch(productSlice.actions.clearAllErrors(data.products))

  } catch (error) {
    dispatch(productSlice.actions.getAllProductsSuccess(error.response.data.message))
  }

}



export default productSlice.reducer
