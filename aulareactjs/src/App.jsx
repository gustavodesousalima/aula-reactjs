import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Meio from './components/meio'
import Rodape from './components/Rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Meio />
    <Rodape />
    </>
  )
}

export default App
