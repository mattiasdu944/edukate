<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom";
=======

import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
>>>>>>> main
import { supabase } from './backend/supabase';
import Layout from './components/Layout';
import { useVerification } from './hooks/useVerification';
import InicioPage from './pages/InicioPage';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';


const App = () => {
  let navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(!session){
        navigate('/login')
      }else{
        navigate('/')
      }
    })
  }, [])



  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />

      <Route path='/' element={<Layout />}>
        {useVerification()}
        <Route path='' element={<InicioPage />} />
      </Route>

    </Routes>
  )
}

export default App