import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';

const App = () => {


  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      
      <Route path="/signin" element={<SignInPage/>} />
    </Routes>
  )
}

export default App