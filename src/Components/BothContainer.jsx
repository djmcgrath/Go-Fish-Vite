import React, {useEffect} from 'react'
import HandCard from './PlayersHand/HandCard'
import CPCard from './ComputerHand/CPCard'

export default function BothContainer ({playerHand, computerHand}) {
  return (
    <div>
        <div>
        {computerHand.map((player, index) => (<CPCard key={index} player={player}/>))}
        </div>
        <div>
        {playerHand.map((player, index) => (<HandCard key={index} player={player}/>))}
        </div>
  </div>
  )
}