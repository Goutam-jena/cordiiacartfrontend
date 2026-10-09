
// import { configureStore } from "@reduxjs/toolkit";

// // Import the product reducer
// import productReducer from "./slices/productSlice";

// // Create the Redux store
// const store = configureStore({
//   reducer: {
//     // Store product-related state under "products"
//     products: productReducer,
//   },
// });

// // Export the store so the app can use it freeely 
// export default store;








import { configureStore } from "@reduxjs/toolkit";

// Import the product reducer
import productReducer from "./slices/productSlice";

// Import the authentication reducer
import authReducer from "./slices/authSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    // Store product-related state under "products"
    products: productReducer,

    // Store authentication-related state under "auth"
    auth: authReducer,
  },
});

// Export the store so the app can use it
export default store;
