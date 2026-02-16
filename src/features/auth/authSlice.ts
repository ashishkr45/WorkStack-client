import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from "@reduxjs/toolkit"
import authService from './authService'
import type { LoginFormData, SignupFormData } from './authSchema'

interface User { // how a logged-in user looks in Redux
  id: string
  name: string
  email: string
}

interface AuthState { // authentication state stored globally
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userCredentials: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await authService.login(userCredentials)
      return response.user;
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        'Login failed'
      return rejectWithValue(message)
    }
  }
)

export const signupUser = createAsyncThunk(
  'auth/signup',
  async (userCredentials: SignupFormData, { rejectWithValue }) => {
    try {
      const response = await authService.signup(userCredentials)
      return response.user;
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        'Signup failed'
      return rejectWithValue(message);
    }
  }
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
    // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
    // SIGNUP
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // LOGOUT
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export const { resetAuth, clearError } = authSlice.actions;
export default authSlice.reducer;