import {useEffect, useState} from 'react';

import {FormControl,FormLabel,InputGroup,Input,Button,Select } from '@chakra-ui/react'

const FormSignIn = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [pais, setPais] = useState([]);
    const [celular, setCelular] = useState('');
    const [password, setPassword] = useState('');

        const cargarPaises = async () => {
            const res = await fetch( 'https://countriesnow.space/api/v0.1/countries');
            const response =  await res.json();
            const country = response.data.map(country => {
                const objeto  = {
                    id: country.iso3,
                    nombre: country.country
                }
                return objeto;
            });
            setPais(country);
        }

    useEffect(() => {


        cargarPaises();
    }, [])
    
    console.log(pais)
    const enviarDatos = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={enviarDatos}>
            <FormControl>
                <InputGroup>
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
                <InputGroup>

                    <FormLabel>Ingresar apellidos</FormLabel>
                    <Input
                        type='apellidos'
                        name='apellidos'
                        placeholder='Ingrese sus apellidos'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />


                </InputGroup>
                
                {/* Pais */}
                
                <InputGroup>
                    <FormLabel>Selecciona tu Pais</FormLabel>
                    <Select placeholder='Select option'>
                        {pais.map((item) => 
                            <option 
                                value={item.id} 
                                key={item.id}
                            >
                                {item.nombre}
                            </option>)}
                    </Select>
                                    
                </InputGroup>
                
                 {/* celular */}
                 <InputGroup>
                    <FormLabel>Numero de Telefono</FormLabel>
                    <Input
                        type='celular'
                        name='celular'
                        placeholder='Ingrese su celular'
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                    />
                </InputGroup>

                {/* Correo */}
                <InputGroup>
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
                <InputGroup>
                    <FormLabel>Registrar contraseña</FormLabel>
                    <Input
                    type='password'
                    name='password'
                    placeholder='Ingrese su password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </InputGroup>
                                
                <Button type='submit' colorScheme='purple'>Button</Button>
            </FormControl>

        </form>
    )
}

export default FormSignIn