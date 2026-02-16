import { Routes, Route } from "react-router-dom"
import { Toaster } from 'react-hot-toast'

import SignupPage from './pages/signupPage'
import LoginPages from './pages/loginPage'
import Dashboard from './pages/dashboard'
import Landing from './pages/landingPage'
import NotFound from './pages/notFound'
import ProtectedRoute from "./components/layout/ProtectedRoute"

import './App.css'

function App() {

  return (
    <>
      <Toaster position='bottom-right' reverseOrder={false} />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<LoginPages />} />
        <Route path='/signup' element={<SignupPage />} />

        {/* Protected Route */}
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />

        {/* Catch-all Route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
