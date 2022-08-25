import React from 'react'
import { Container, Text, Box } from '@chakra-ui/react'

import FormLogin from '../components/FormLogin'

const LoginPage = () => {

  return (
    //FRAGMENT DOM
    <Container>
        <Text fontSize='3rem' fontWeight='800'>
            Iniciar Sesion!
        </Text>
        
        {/* FORMULARIO DE LOGUEO */}
        <FormLogin/>


        {/* FOOTER */}
        <Box>
          
        </Box>   
    </Container>
  )
}

export default LoginPage