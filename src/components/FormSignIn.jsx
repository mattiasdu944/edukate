import { useEffect, useState } from 'react';
import { FormControl, FormLabel, InputGroup, Input, Button, Select, useToast } from '@chakra-ui/react'

const FormSignIn = () => {

    // ESTADOS PARA EL FORMULARIO
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [pais, setPais] = useState('');
    const [celular, setCelular] = useState('');
    const [password, setPassword] = useState('');


    // ESTADOS PARA GUARDAR LOS PAISES
    const [paises, setPaises] = useState([]);

    // API DE PAISES
    const cargarPaises = async () => {
        const res = await fetch('https://countriesnow.space/api/v0.1/countries');
        const response = await res.json();
        const country = response.data.map(country => {
            const objeto = {
                id: country.iso2,
                nombre: country.country
            }
            return objeto;
        });
        setPaises(country);
    }

    // CARGAR LOS PAISES
    useEffect(() => {
        cargarPaises();
    }, [])

    
    // VALIDACION DEL FORMULARIO
    const toast = useToast()
    const enviarDatos = (e) => {
        e.preventDefault();
        
        // VALIDACIONES
        if(nombre.trim() === '' || pais.trim() === '' ||apellido.trim() === '' || correo.trim() === '' || celular.trim()==='' || password.trim() === ''){
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
    }


    return (
        <form onSubmit={enviarDatos}>
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

                {/* Pais */}
                <InputGroup display="flex" flexDirection="column" mb={5}>
                    <FormLabel>Selecciona tu Pais</FormLabel>
                    <Select
                        onChange={e => setPais(e.target.value)}
                        placeholder='Select option'
                    >
                        {paises.map((item, index) =>
                            <option
                                value={item.nombre}
                                key={index}
                            >
                                {item.nombre}
                            </option>
                        )}
                    </Select>

                </InputGroup >

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

                <Button type='submit' colorScheme='indigo'>Registrar</Button>
            </FormControl>
        </form>
    )
}

export default FormSignIn