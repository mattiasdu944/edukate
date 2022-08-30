import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter} from "react-router-dom";
import {theme} from './constants/theme'
ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <ChakraProvider theme={theme}>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </ChakraProvider>
  </React.StrictMode>
)
