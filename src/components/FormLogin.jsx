import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    InputGroup,
    
    Button,
    Text
} from '@chakra-ui/react'
import styled from 'styled-components';
import { supabase } from '../backend/supabase';



const FormLogin = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('')
    
    
    
    const iniciarSesion = async () => {
        const { user, session, error } = await supabase.auth.signIn({
          email: correo,
          password: password,
        })
    }


    const enviarDatos = (e) => {
        e.preventDefault();

        iniciarSesion();

    }

  let navigate = useNavigate();

  return (
    <From onSubmit={enviarDatos}>
        <Text fontWeight={700} fontSize={{ base: '2.5rem', md: '3rem' }}>Iniciar Sesion</Text>
        <FormControl>
            <InputGroup display="flex" flexDirection="column" mb={5}>
                <FormLabel>Direccion de correo</FormLabel>
                <Input 
                    type='email' 
                    name='email' 
                    placeholder='Ingresa tu direccion de correo'
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
            </InputGroup>

            <InputGroup display="flex" flexDirection="column" mb={5}>
                <FormLabel>Contraseña</FormLabel>
                <Input 
                    type='password'
                    name='password' 
                    placeholder='Ingresa tu contraseña' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputGroup>

            <Button 
            type='submit' 
            bg="indigo.100" 
            _hover={{bg: 'indigo.300'}} 
            _active={{bg: 'indigo.100'}} 
            
            fontSize={{ base: '1rem', md: '1.25rem' }}
            py="1.5rem" 
            w="100%"
            >
                Iniciar sesion
            </Button>
            <Enlace onClick={() => navigate('/signin')}> No tienes cuenta? <span>Registrate Gratis!</span></Enlace>
        </FormControl>
    </From>
  )
}

const From = styled.form`
    max-width: 550px;
    min-width: none;
    margin-top: 1rem;
`
const Enlace= styled.p`
    /* text-decoration: underline; */
    font-weight: 700;
    font-size:1rem;
    cursor:pointer;
    margin: 1.5rem;
    & span{
        color: #9746d1;
        text-decoration: underline;
    }
`
const Input = styled.input`
    border-radius: .25rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: .5rem 1rem;

    &::placeholder{
        color: #676767;
    }
`

export default FormLogin