import React, { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom";
import { supabase } from './backend/supabase';
import Layout from './components/Layout';
import InicioPage from './pages/InicioPage';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';


const App = () => {




  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />

      <Route path='/' element={<Layout />}>
        <Route path='' element={<InicioPage />} />
      </Route>

    </Routes>
  )
}

export default App