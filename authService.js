
import axios from "axios";

// Backend authentication API URL
const API_URL = "http://10.0.2.2:5000/api/auth";

// Register a new user
const register = async (userData) => {
  try {
    const response = await axios.post(
      `${API_URL}/register`,
      userData
    );

    return response.data;
  } catch (error) {
    console.error(
      "Registration error:",
      error.response?.data?.message || error.message
    );

    throw new Error(
      error.response?.data?.message ||
        "Registration failed. Please try again."
    );
  }
};

// Login an existing user
const login = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      credentials
    );

    return response.data;
  } catch (error) {
    console.error(
      "Login error:",
      error.response?.data?.message || error.message
    );

    throw new Error(
      error.response?.data?.message ||
        "Login failed. Please try again."
    );
  }
};

// Export authentication functions
const authService = {
  register,
  login,
};

export default authService;
