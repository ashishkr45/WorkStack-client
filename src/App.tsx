import './App.css'
import {Routes, Route} from "react-router-dom"
import SignupPage from './pages/signupPage'
import LoginPage from './pages/loginPage'
import Dashboard from './pages/dashboard'
import Landing from './pages/landingPage'
import NotFound from './pages/notFound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default App
