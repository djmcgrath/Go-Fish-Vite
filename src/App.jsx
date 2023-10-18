import { useState, useEffect } from 'react'
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
  const [playerInfo, setPlayerInfo] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/players")
    .then(res => res.json())
    .then(res => {
      setPlayerInfo(res)
    })
  }, [])

  function handleNewPlayer(newPlayer) {
    setPlayerInfo([...playerInfo, newPlayer])
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavLayout />}>
        <Route index element={<PlayerPage playerInfo={playerInfo} handleNewPlayer={handleNewPlayer} />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/scorecard" element={<ScoreCard playerInfo={playerInfo} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
