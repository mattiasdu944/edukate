import React from 'react'
import FormSignIn from '../components/FormSignIn'
import { Container, Text, Box, Input } from '@chakra-ui/react'

const SignInPage = () => {
  return (
    <Container>
        <Text fontSize='3rem' fontWeight='800'>
            Registrate gratis
        </Text>
        <FormSignIn/>
    
        
    </Container>
  )
}

export default SignInPage