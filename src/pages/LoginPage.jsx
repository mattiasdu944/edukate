import React from 'react'


import FormLogin from '../components/FormLogin'
import styled, { keyframes } from 'styled-components'
import { Box, Container } from '@chakra-ui/react'


const LoginPage = () => {



  return (
    <Section>
      <Container maxW='5xl'>

        <LoginContainer>
          <Box textAlign='center' mb={5}>
            <Title>Edukate</Title>
            <p>
              Te ayudamos a que puedas crecer <br />
              profesionalmente y ser un profesional <br />
              de excelencia
            </p>
          </Box>

          <FormContainer>
            <FormLogin />
            <ImageContainer>
              <Image
                src='https://www.tzuzulcode.com/illustrations/spaceship/spaceship1.png'
              />
            </ImageContainer>
          </FormContainer>

        </LoginContainer>
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
const LoginContainer = styled.div`
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
  justify-content:space-between;
  width: 100%;
  padding: 2rem 6rem;


  @media (max-width: 768px) {
    padding: 0 3rem;
  }
`

const ImageContainer = styled.div`
  max-width: 350px;
  display: flex;
  justify-content: center;
/* width:100%; */
`

const image = keyframes`
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
  max-width: 300px;
  display: inline-block;
  animation: ${image} 2s linear infinite;

  @media (max-width:400px) {
    width:200px;
  }
`
export default LoginPage