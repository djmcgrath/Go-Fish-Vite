import { useState } from 'react'
import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import GamePage from './Components/GamePage'
import PlayerPage from './PlayerPage'
import ScoreCard from './ScoreCard'
import NavLayout from "./Components/NavLayout"



function App() {
  const [playerTurn, setPlayerTurn] = useState(false)
  const [computerTurn, setComputerTurn] = useState(false)

  const userLoader = async () => {
    const response = await fetch("http://localhost:3000/players")
    return response.json()
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavLayout />}>
        <Route index element={<PlayerPage />} loader={userLoader} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/scorecard" element={<ScoreCard />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
