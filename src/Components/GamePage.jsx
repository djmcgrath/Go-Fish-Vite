import React, { useState } from 'react'
import BothContainer from './BothContainer'

export default function DeckofCards({player}) {
  const [playerHand, setPlayerHand] = useState([])
  const [computerHand, setComputerHand] = useState([])
  const [deckId, setDeckId] = useState("")

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
        if (cb === "user"){
          console.log("user should be drawing")
          setPlayerHand(prevPlayerHand => [...prevPlayerHand, res.cards[0]])
        }else if (cb === "computer") {
          setComputerHand(prevComputerHand => [...prevComputerHand, res.cards[0]])
        }
      })
  }



  return (
    <>
      <div>
        <button className="dropdown" onClick={displayNewDeck}>Click for New Deck and Deal</button>
        <BothContainer computerHand={computerHand} playerHand={playerHand} drawNewCard={drawNewCard} setComputerHand={setComputerHand} setPlayerHand={setPlayerHand} player={player}/>
      </div>
    </>
  )
}
