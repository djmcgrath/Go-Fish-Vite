import React from 'react'

export default function HandCard ({player, compareCards}) {

  return (
    <img onClick={()=> compareCards(player.value)} src={player.image}></img>
  )
}
