import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DeckofCards from './Components/DeckofCards'
import NavLayout from './Components/NavLayout'


function App() {

  return (
    <>
      <NavLayout />
      <DeckofCards />
    </>
  )
}

export default App
