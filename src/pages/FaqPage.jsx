import { Container } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

const FaqPage = () => {
  return (
    <Section>
      <Container maxW="5xl" textAlign="center">
        <h3>Pagina en Desarollo</h3>
        <Image src="https://www.tzuzulcode.com/illustrations/scenes/background/08.png"/>
      </Container>
    </Section>
  )
}
const Section = styled.section`
  padding: 5rem 0 1rem;
  min-height: 100vh;
`
const Image = styled.img`
    margin: auto;
    width: 550px;
    border-radius: 1rem;
    
`
export default FaqPage