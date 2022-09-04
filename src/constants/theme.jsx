import { extendTheme } from "@chakra-ui/react"


export const theme = extendTheme({

  styles: {
    global: {
      body: {
        
        bg: '#18181a',
        // bg: '#000',
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
        fontSize:'2rem',
        fontWeight:'600'
      },
      li:{
        listStyle:'none'
      }
    },
  },
  colors: {
    indigo: {
      100: "#9746d1",
      300: "#7018C1",
    },
    gray: {
      100: "#252429",
    
      
      500: "#3a3a3c"

    },
    textColor:{
      100: "#EDF2F7",
    }
  },
})