import './App.css'
import {Routes, Route} from "react-router-dom"
import AuthPage from './pages/auth'
import Dashboard from './pages/dashboard'
import Landing from './pages/landingPage'
import NotFound from './pages/notFound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default App
