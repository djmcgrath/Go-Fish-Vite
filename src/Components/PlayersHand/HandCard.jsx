import React from 'react'

export default function HandCard ({player, comparePlayerHand}) {

  return (
    <img onClick={()=> comparePlayerHand(player.value)} src={player.image}></img>
  )
}
