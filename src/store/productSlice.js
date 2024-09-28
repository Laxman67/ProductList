import { createSlice } from "@reduxjs/toolkit";
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
====================================================
*/

const initialState={
    loading,
    error,
    message,
    products:[],
    page:1,
    limit:10,
    total:0
    

}
const productSlice = createSlice(
    {
        name: 'product',
        initialState,
        reducers:{
    
        }
    
    }
)


export default productSlice.reducer
