import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginComp from './components/LoginComp'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import LogOutComp from './pages/LogOutComp'


function App() {


  return (
    <>
      {/* <h1>Welcome</h1> */}
      {/* <LoginComp /> */}
      {/* <Home/> */}

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} >
            <Route path="login" element={<LoginComp />} />
            <Route path="register" element={<h2>Register form</h2>} />
          </Route>
          <Route path="/user" element={
            <ProtectedRoutes role={2} >
              <UserDashboard />
            </ProtectedRoutes>}>

          </Route>
          <Route path="/admin" element={<ProtectedRoutes role={1}>
            <AdminDashboard />
          </ProtectedRoutes>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
