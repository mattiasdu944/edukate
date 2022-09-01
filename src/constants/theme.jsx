import { extendTheme } from "@chakra-ui/react"


export const theme = extendTheme({

  styles: {
    global: {
      body: {
        bg: '#101011',
        color: '#EDF2F7',
      },
      h1:{
        fontSize:'4rem',
        fontWeight:'700',
      },
      h2:{
        fontSize:'3.5rem',
        fontWeight:'700'
      },
      h3:{
        fontSize:'3rem',
        fontWeight:'700'
      },
      h4:{
        fontSize:'2.5rem',
        fontWeight:'700'
      }
    },
  },
  colors: {
    indigo: {
      100: "#7E21D4",
      300: "#7018C1",
    },
    textColor:{
      100: "#EDF2F7",
    }
  },
})