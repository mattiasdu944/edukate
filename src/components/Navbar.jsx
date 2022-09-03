import React from 'react'
import { supabase } from '../backend/supabase';

const Navbar = () => {

  const cerrarSesion = async () => {
    try {
      const { error } = await supabase.auth.signOut()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header>
        <nav>
            <h1>Edukate</h1>
            <button onClick={() => cerrarSesion()}>Cerrar Sesion</button>
        </nav>
    </header>
  )
}

export default Navbar