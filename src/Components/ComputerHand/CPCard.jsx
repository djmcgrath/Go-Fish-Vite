import React from 'react'

export default function CPCard ({player, compareComputerHand}) {
  return (
    <img width={150} height={"auto"} onClick={()=> compareComputerHand(player.value)} src={player.image}></img>
  )
}
