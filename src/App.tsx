import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AuthenticationUser } from './actions/auth'
import { Login } from './pages/Login/Index'
import { MainScreen } from './pages/MainScreen'
import { globalStyles } from './styles/global'

function App() {
  globalStyles()
  const navigate = useNavigate()
  const isAuthenticated = AuthenticationUser()

  useEffect(() => {
    isAuthenticated ? navigate('/main') : navigate('/')
  }, [isAuthenticated])


  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path={'/main'} element={<MainScreen />} />
    </Routes>
  )
}

export default App
