import React from 'react'

export default function HandCard ({player, comparePlayerHand}) {

  return (
    <img width={80} height={"auto"} onClick={()=> comparePlayerHand(player.value)} src={player.image}></img>
  )
}
