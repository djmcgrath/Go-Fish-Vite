import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import BothContainer from './BothContainer'

export default function DeckofCards({player, playerTurn, setPlayerTurn, computerHand, setComputerHand, playerHand, setPlayerHand}) {
  const [deckId, setDeckId] = useState("")
  
  const navigate = useNavigate()

  function splitDeck(res) {
    const numberOfCards = res.cards.length;
    const numberOfCardsPerSplit = Math.floor(numberOfCards / 2);

    setComputerHand([])
    setPlayerHand([])

    for (let i = 0; i < numberOfCards; i++) {
      if (i < numberOfCardsPerSplit) {
        setComputerHand(prevComputerHand => [...prevComputerHand, res.cards[i]]);
      } else {
        setPlayerHand(prevPlayerHand => [...prevPlayerHand, res.cards[i]]);
      }
    }
  }

  function displayNewDeck() {
    fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=14")
      .then(res => res.json())
      .then(res => {
        splitDeck(res)
        setDeckId(res["deck_id"])
        console.log(res)
      })

  }

  function drawNewCard(cb) {
    console.log(cb)
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(res => res.json())
      .then(res => {
        if (res.cards.length === 0){
          return navigate("/scorecard")
        }
        if (cb === "user"){
          console.log("user should be drawing")
          setPlayerHand(prevPlayerHand => [...prevPlayerHand, res.cards[0]])
        }else if (cb === "computer") {
          setComputerHand(prevComputerHand => [...prevComputerHand, res.cards[0]])
        }
      })
  }

  console.log(player)


  return (
    <>
      <div>
        <button type="button" className="btn btn-success" onClick={displayNewDeck}>Click for New Deck and Deal</button>
        { playerTurn? <h1 className='turn'>{player.name}'s turn</h1> : <h1 className='turn'>Computer's turn</h1>}
        <BothContainer computerHand={computerHand} playerHand={playerHand} drawNewCard={drawNewCard} setComputerHand={setComputerHand} setPlayerHand={setPlayerHand} player={player} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}/>
      </div>
    </>
  )
}
