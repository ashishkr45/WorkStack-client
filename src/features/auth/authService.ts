import api from '../../services/api';
import type { LoginFormData, SignupFormData } from './authSchema'; 

interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// POST /api/v1/auth/login 
const login = async (userData: LoginFormData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', userData)
  return response.data;
};

// POST /api/v1/auth/signup 
const signup = async (userData: SignupFormData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/signup', userData)
  return response.data;
}

// POST /api/v1/auth/logout
const logout = async (): Promise<void> => {
  await api.post('/auth/logout'); // clear the HttpOnly cookie
};

const authService = {
  login,
  signup,
  logout,
};

export default authService;