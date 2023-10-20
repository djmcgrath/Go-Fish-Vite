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
  const [player, setPlayer] = useState("")
  const [playerTurn, setPlayerTurn] = useState(true)
  const [playerHand, setPlayerHand] = useState([])
  const [computerHand, setComputerHand] = useState([])

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
        <Route index element={<PlayerPage playerInfo={playerInfo} handleNewPlayer={handleNewPlayer} setPlayer={setPlayer}/>} />
        <Route path="/game" element={<GamePage playerHand={playerHand} setPlayerHand={setPlayerHand} computerHand={computerHand} setComputerHand={setComputerHand} player={player} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>} />
        <Route path="/scorecard" element={<ScoreCard playerHand={playerHand} setPlayer={setPlayer} setPlayerHand={setPlayerHand} setPlayerInfo={setPlayerInfo} computerHand={computerHand} setComputerHand={setComputerHand} player={player} playerInfo={playerInfo}/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
