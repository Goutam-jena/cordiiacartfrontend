
import axios from "axios";

// Backend API base URL
const API_URL = "http://10.0.2.2:5000/api/products";

// Fetch all products
const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data.products;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response?.data?.message || error.message
    );

    throw error;
  }
};

// Fetch a single product by ID
const getProductById = async (productId) => {
  try {
    const response = await axios.get(
      `${API_URL}/${productId}`
    );

    return response.data.product;
  } catch (error) {
    console.error(
      "Error fetching product:",
      error.response?.data?.message || error.message
    );

    throw error;
  }
};

const productService = {
  getAllProducts,
  getProductById,
};

export default productService;
