
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import authService from "../../services/authService";

// // STEP 1: Register a new user
// export const registerUser = createAsyncThunk(
//   "auth/register",
//   async (userData, thunkAPI) => {
//     try {
//       const response = await authService.register(userData);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.message || "Registration failed."
//       );
//     }
//   }
// );

// // STEP 2: Log in an existing user
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await authService.login(credentials);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(
//         error.message || "Login failed."
//       );
//     }
//   }
// );

// // STEP 3: Initial authentication state
// const initialState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null,
//   successMessage: null,
// };

// // STEP 4: Create the authentication slice
// const authSlice = createSlice({
//   name: "auth",
//   initialState,

//   // Normal synchronous actions
//   reducers: {
//     // Clear old error messages
//     clearAuthError: (state) => {
//       state.error = null;
//     },

//     // Clear registration/login success messages
//     clearAuthStatus: (state) => {
//       state.successMessage = null;
//       state.error = null;
//     },

//     // Log out the user
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.loading = false;
//       state.error = null;
//       state.successMessage = null;
//     },
//   },

//   // Handle asynchronous registration and login
//   extraReducers: (builder) => {
//     builder

//       // REGISTER: Request started
//       .addCase(registerUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.successMessage = null;
//       })

//       // REGISTER: Request succeeded
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.successMessage =
//           action.payload.message || "Registration successful.";
//       })

//       // REGISTER: Request failed
//       .addCase(registerUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error =
//           action.payload || "Registration failed.";
//       })

//       // LOGIN: Request started
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.successMessage = null;
//       })

//       // LOGIN: Request succeeded
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         state.successMessage =
//           action.payload.message || "Login successful.";
//       })

//       // LOGIN: Request failed
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Login failed.";
//       });
//   },
// });

// // STEP 5: Export normal actions
// export const {
//   clearAuthError,
//   clearAuthStatus,
//   logout,
// } = authSlice.actions;

// // STEP 6: Export reducer for the Redux store
// export default authSlice.reducer;







































import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";

import {
  saveSession,
  getSession,
  removeSession,
} from "../../services/authStorage";

// STEP 1: Register a new user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.register(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Registration failed."
      );
    }
  }
);

// STEP 2: Log in and save the session
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      // Send credentials to the backend
      const response = await authService.login(credentials);

      // Save the user and token on the device
      await saveSession({
        user: response.user,
        token: response.token,
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message || "Login failed."
      );
    }
  }
);

// STEP 3: Restore the saved session when the app starts
export const restoreSession = createAsyncThunk(
  "auth/restoreSession",
  async (_, thunkAPI) => {
    try {
      const session = await getSession();

      if (!session?.user || !session?.token) {
        return null;
      }

      return session;
    } catch (error) {
      // Remove an unreadable or invalid saved session
      try {
        await removeSession();
      } catch {
        // Ignore storage cleanup errors here
      }

      return thunkAPI.rejectWithValue(
        "Could not restore the saved session."
      );
    }
  }
);

// STEP 4: Log out and remove the saved session
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async () => {
    await removeSession();
  }
);

// STEP 5: Initial authentication state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  isRestoring: true,
  error: null,
  successMessage: null,
};

// STEP 6: Create the authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },

    clearAuthStatus: (state) => {
      state.successMessage = null;
      state.error = null;
    },

    // Reset Redux authentication state
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // REGISTER: Request started
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })

      // REGISTER: Request succeeded
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage =
          action.payload.message || "Registration successful.";
      })

      // REGISTER: Request failed
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload || "Registration failed.";
      })

      // LOGIN: Request started
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })

      // LOGIN: Request succeeded
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.successMessage =
          action.payload.message || "Login successful.";
      })

      // LOGIN: Request failed
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed.";
      })

      // RESTORE: Check saved session
      .addCase(restoreSession.pending, (state) => {
        state.isRestoring = true;
      })

      // RESTORE: Session found or no session found
      .addCase(restoreSession.fulfilled, (state, action) => {
        state.isRestoring = false;

        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isAuthenticated = true;
        } else {
          state.user = null;
          state.token = null;
          state.isAuthenticated = false;
        }
      })

      // RESTORE: Failed to read saved session
      .addCase(restoreSession.rejected, (state, action) => {
        state.isRestoring = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload || "Session restoration failed.";
      })

      // LOGOUT: Clear Redux after storage cleanup succeeds
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
        state.successMessage = null;
      })

      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
        state.error = "Could not clear the saved session.";
      });
  },
});

// STEP 7: Export normal actions
export const {
  clearAuthError,
  clearAuthStatus,
  logout,
} = authSlice.actions;

// STEP 8: Export reducer
export default authSlice.reducer;
