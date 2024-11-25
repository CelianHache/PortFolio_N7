import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './Views/Main'

function App() {

  return (
    <>
      <ChakraProvider>
          <Main>
            
          </Main>
      </ChakraProvider>
    </>
  )
}

export default App
