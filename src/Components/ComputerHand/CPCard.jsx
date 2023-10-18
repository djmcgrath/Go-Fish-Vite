import React from 'react'

export default function CPCard ({player, compareComputerHand}) {
  return (
    <img onClick={()=> compareComputerHand(player.value)} src={player.image}></img>
  )
}
