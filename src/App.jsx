
import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { supabase } from './backend/supabase';
import Layout from './components/Layout';
import { useVerification } from './hooks/useVerification';
import EmpresasPage from './pages/EmpresasPage';
import FaqPage from './pages/FaqPage';
import InicioPage from './pages/InicioPage';
import LoginPage from './pages/LoginPage';
import NosotrosPage from './pages/NosotrosPage';
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
        <Route path='nosotros' element={<NosotrosPage/>}/>
        <Route path='empresas' element={<EmpresasPage />} />
        <Route path='faq' element={<FaqPage />} />
        
      </Route>

    </Routes>
  )
}

export default App