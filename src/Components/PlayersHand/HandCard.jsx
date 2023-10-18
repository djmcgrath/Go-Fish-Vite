import React from 'react'

export default function HandCard ({player, comparePlayerHand}) {

  return (
    <img width={150} height={"auto"} onClick={()=> comparePlayerHand(player.value)} src={player.image}></img>
  )
}
