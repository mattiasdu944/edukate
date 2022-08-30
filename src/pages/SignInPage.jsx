import React from 'react'
import FormSignIn from '../components/FormSignIn'

import styled from 'styled-components';
import { Image } from '@chakra-ui/react';


  
const SignInPage = () => {
  return (
    <Section>
      {/* <Container> */}
        <FlexContainer>
          <FormContainer>
            <Title>Registrarte</Title>
            <FormSignIn />
          </FormContainer>
          
          <Image
            objectFit='cover'
            display="flex"
            alignContent="end"
            src='https://campus.open-bootcamp.com/static/media/login_dark.e964d5dd01eea4e84171.png'
            alt='Dan Abramov'
          />
        </FlexContainer>
      {/* </Container> */}
   

    </Section>
  )
}
const Section = styled.section `
  display: flex;
  min-height: 100vh;
`
const Title = styled.h1`
  font-size: 3rem;
`

const FormContainer = styled.div`
  width: 100%;
  padding: 0 6rem;
`

const FlexContainer = styled.div `
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  
`

const ImageContainer = styled.div`
  width: 100%;
  display: row;
`

export default SignInPage