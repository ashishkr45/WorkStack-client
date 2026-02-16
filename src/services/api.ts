import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1', 
  withCredentials: true, // tells the browser to send cookies (and accept cookies) for
  headers: {
    'Content-Type': 'application/json',
  },
})
/*
creating an pre-defined axios instance with base_backend_url, 
so we don't have to repeat http://localhost:5000 (base_backend_url) multiple times
everytime we are sending a req to backend
*/

api.interceptors.response.use(
  (response) => response, // if normal res send it 
  (error) => { // error get's logged
    if (error.response?.status === 401) {
      console.error('JWT Token expired or missing.'); // if we find 401(Unauthorized) we log not send user
    }
    return Promise.reject(error);
  }
)
/*
global listener. catches 401 responses (JWT expired/invalid) 
and logs them — it intentionally doesn't redirect the user
*/

export default api