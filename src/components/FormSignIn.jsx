import { useEffect, useState } from 'react';
import { FormControl, FormLabel, InputGroup, Button, useToast, Text } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { supabase } from '../backend/supabase'

import styled from 'styled-components';

const FormSignIn = () => {

    // ESTADOS PARA EL FORMULARIO
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [password, setPassword] = useState('');

    // VALIDACION DEL FORMULARIO
    const toast = useToast()

    const registrarUsuario = async () => {
        try {
            const { user } = await supabase.auth.signUp({
                email: correo,
                password: password,
            })

            if (user.aud) {
                try {
                    const response = await supabase
                    .from('usuarios')
                    .insert([
                        {
                            id: user.id,
                            nombre: nombre,
                            apellidos: apellido,
                            correo: correo,
                            password: password,
                            tipo_usuario: 1
                        }
                    ])
                } catch (error) {
                    console.log(error);   
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    const enviarDatos = (e) => {
        e.preventDefault();

        // VALIDACIONES
        if (nombre.trim() === '' || apellido.trim() === '' || correo.trim() === '' || celular.trim() === '' || password.trim() === '') {
            toast({
                title: `Datos Erroneos`,
                description: 'Casillas vacias',
                position: 'top-right',
                status: 'error',
                variant: 'left-accent',
                containerStyle: {
                    color: 'red'
                },
                isClosable: true,
            })
            return
        }
        toast({
            title: `Registro correcto`,
            description: 'Se registo el usuario correctamente',
            position: 'top-right',
            status: 'success',
            variant: 'left-accent',
            containerStyle: {
                color: 'green'
            },
            isClosable: true,
        })
        console.log('Enviando Datos');
        registrarUsuario();
    }

    let navigate = useNavigate();

    return (
        <form onSubmit={enviarDatos}>
            <Text mb={5} fontWeight={700} fontSize={{base:'2rem', md:"3rem"}}>Registrate!</Text>
            <FormControl>
                <InputGroup display="flex" flexDirection="column" mb={5}>
                    <FormLabel>Ingresar nombre</FormLabel>
                    <Input
                        type='text'
                        name='nombre'
                        placeholder='Ingrese su nombre completo'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </InputGroup>

                {/* Apellidos */}
                <InputGroup display="flex" flexDirection="column" mb={5}>

                    <FormLabel>Ingresar apellidos</FormLabel>
                    <Input
                        type='text'
                        name='apellidos'
                        placeholder='Ingrese sus apellidos'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />


                </InputGroup>

                {/* celular */}
                <InputGroup display="flex" flexDirection="column" mb={5}>
                    <FormLabel>Numero de Telefono</FormLabel>
                    <Input
                        type='number'
                        name='celular'
                        placeholder='Ingrese su celular'
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                    />
                </InputGroup>

                {/* Correo */}
                <InputGroup display="flex" flexDirection="column" mb={5}>
                    <FormLabel>Ingresar Correo</FormLabel>
                    <Input
                        type='correo'
                        name='correo'
                        placeholder='Ingrese su correo'
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </InputGroup>

                {/* password */}
                <InputGroup display="flex" flexDirection="column" mb={5}>
                    <FormLabel>Registrar contraseña</FormLabel>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Ingrese su password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>

                <Button type='submit' bg="indigo.100" _hover={{ bg: 'indigo.300' }} _active={{ bg: 'indigo.100' }} fontSize="1.2rem" py="1.5rem" w="100%">Registrar</Button>

                <Enlace onClick={() => navigate('/login')}> Ya tiene cuenta? <span>Inicia Sesion</span></Enlace>
            </FormControl>
        </form>
    )
}

const Option = styled.option`
    color: #000;   
`

const Input = styled.input`
    border-radius: .25rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: .5rem 1rem;

    &::placeholder{
        color: #676767;
    }
`

const Enlace= styled.p`
    /* text-decoration: underline; */
    font-weight: 700;
    font-size:1.2rem;
    cursor:pointer;
    margin: 1.5rem;
    & span{
        color: #9746d1;
        text-decoration: underline;
    }
`
export default FormSignIn