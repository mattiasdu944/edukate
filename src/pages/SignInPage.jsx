import React from 'react'
import FormSignIn from '../components/FormSignIn'

import styled, { keyframes } from 'styled-components';
import { Box, Container } from '@chakra-ui/react';


  
const SignInPage = () => {
  return (
    <Section>
      <Container maxW='5xl'>
        <SignInContainer>
          <Box textAlign='center' mb={5}>
            <Title>Edukate</Title>
          </Box>

          <FormContainer>

              <FormSignIn />

              <ImageContainer>
                <Image
                  src='https://qjzaxgwtmenwwhddpvuh.supabase.co/storage/v1/object/sign/assets/05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvMDUucG5nIiwiaWF0IjoxNjYyMjUyNDYxLCJleHAiOjE5Nzc2MTI0NjF9.GvM8cURKJImfpC7uaV1aiAwi6v7bKC3yXjzdMpfoXsc'
                  
                  alt='Edukate illustration'
                />
              </ImageContainer>
          </FormContainer>
            
        </SignInContainer>
      </Container>
   

    </Section>
  )
}
const Section = styled.section`
  display: flex;
  min-height: 100vh;
  /* background-color: #000000; */
  background-image: url('https://dashboard.tzuzulcode.com/static/media/background.917bc3b48e362df9822b.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const SignInContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 & p{
  text-align: center;
 }
`
const Title = styled.h1`
  font-size:5rem;
  @media (max-width: 568px) {
    font-size: 3rem;
  }
`
const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, .2);
  backdrop-filter: blur(60px);
  border-radius: .5rem;
  border:1px solid #000;
  box-shadow: 0px 10px 13px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-content:space-between;
  width: 100%;
  padding: 2rem 6rem;


  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`

const ImageContainer = styled.div`
  /* max-width: 300px; */
  width: auto;
  display: flex;
  justify-content: center;
`

const updown = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const Image = styled.img`
  /* max-width: 100%; */
  width: 100%;
  /* height: auto; */
  display: inline-block;
  animation: ${updown} 3s linear infinite;

  @media (max-width:400px) {
    width:200px;
  }
`
export default SignInPage