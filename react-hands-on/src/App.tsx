import './App.css'
import { RouterConfig } from './RouterConfig'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <RouterConfig />
      </ChakraProvider>
    </div>
  )
}

export default App
