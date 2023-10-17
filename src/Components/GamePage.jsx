import React, { useState, useEffect, useRef } from 'react'
import BothContainer from './BothContainer'

export default function DeckofCards() {
  const [playerHand, setPlayerHand] = useState([])
  const [computerHand, setComputerHand] = useState([])
  const [deckId, setDeckId] = useState("")
  const [drawnCard, setDrawnCard] = useState([])

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
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(res => res.json())
      .then(res => {
        if (cb === "user"){
          setPlayerHand(prevPlayerHand => [...prevPlayerHand, res.cards[0]])
        }else setComputerHand(prevPlayerHand => [...prevPlayerHand, res.cards[0]])
        //  setDrawnCard(res.cards[0].image)
      })
  }



  return (
    <>
      <div>
        <button type="button" className="btn btn-primary" onClick={displayNewDeck}>Click for New Deck</button>
        <button type="button" className="btn btn-primary" onClick={drawNewCard}>Draw New Card</button>
        <BothContainer computerHand={computerHand} playerHand={playerHand} drawNewCard={drawNewCard} />
      </div>
    </>
  )
}
