import React, {useState} from 'react'
import CPContainer from './ComputerHand/CPContainer'
import HandContainer from './PlayersHand/HandContainer'

export default function DeckofCards () {
  const [playerHand, setPlayerHand] = useState([])
  const [computerHand, setComputerHand] = useState([])
  
  return (
    <div>
        <CPContainer />
        <HandContainer />
    </div>
  )
}
