import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    Button
} from '@chakra-ui/react'
import styled from 'styled-components';



const FormLogin = () => {
    
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('')


    const enviarDatos = (e) => {
        e.preventDefault();
    }

  let navigate = useNavigate();

  return (
    <From onSubmit={enviarDatos}>
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
            fontSize="1.2rem" 
            py="1.5rem" 
            w="100%"
            >
                Iniciar sesion
            </Button>
            <Enlace onClick={() => navigate('/signin')}> No tienes cuenta? Registrate</Enlace>
        </FormControl>
    </From>
  )
}

const From = styled.form`
    max-width: 550px;
`
const Enlace= styled.p`
    text-decoration: underline;
    color: #7E21D4;
    font-weight: 700;
    font-size:1.2rem;
    cursor:pointer;
    margin: 1.5rem;
`

export default FormLogin