import { extendTheme } from "@chakra-ui/react"


export const theme = extendTheme({

  styles: {
    global: {
      body: {
        bg: '#202124',
        color: '#EDF2F7',
      },
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