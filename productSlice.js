
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/productService";

// STEP 1: Fetch all products from our backend API
// This function calls productService.getAllProducts().
// createAsyncThunk handles the loading and error lifecycle for us.
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      // Get products from the backend
      const products = await productService.getAllProducts();

      // The returned value becomes action.payload when fulfilled
      return products;
    } catch (error) {
      // Send an error message to the rejected action
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || "Failed to fetch products"
      );
    }
  }
);










// STEP 2: Create the initial state
// This is the starting data stored in Redux.
const initialState = {
  products: [],       // All products received from the backend
  loading: false,     // Is the app currently fetching products?
  error: null,        // Stores an error message if fetching fails
};

// STEP 3: Create the product slice
const productSlice = createSlice({
  name: "products",

  // The initial state of this slice
  initialState,

  // Synchronous reducers: update state directly for simple actions
  reducers: {
    // Clear an old error message
    clearProductError: (state) => {
      state.error = null;
    },
  },






  
  // Handle the loading, success, and failure actions
  // automatically created by fetchProducts
  extraReducers: (builder) => {
    builder

      // CASE 1: The API request has started
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // CASE 2: The API request succeeded
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      // CASE 3: The API request failed
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

// STEP 4: Export the normal action so components can clear errors
export const { clearProductError } = productSlice.actions;

// STEP 5: Export the reducer so the Redux store can use it
export default productSlice.reducer;
