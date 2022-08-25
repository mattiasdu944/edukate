import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    Button
} from '@chakra-ui/react'
const FormLogin = () => {
    
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('')


    const enviarDatos = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={enviarDatos}>
        <FormControl>
            <InputGroup>
                <FormLabel>Direccion de correo</FormLabel>
                <Input 
                    type='email' 
                    name='email' 
                    placeholder='Ingresa tu direccion de correo'
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
            </InputGroup>

            <InputGroup>
                <FormLabel>Contraseña</FormLabel>
                <Input 
                    type='password'
                    name='password' 
                    placeholder='Ingresa tu contraseña' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputGroup>

            <Button type='submit' colorScheme='purple'>Button</Button>
        </FormControl>
    </form>
  )
}

export default FormLogin