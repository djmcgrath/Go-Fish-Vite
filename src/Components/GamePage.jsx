import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import BothContainer from './BothContainer'

export default function DeckofCards({player, playerTurn, setPlayerTurn, computerHand, setComputerHand, playerHand, setPlayerHand, score, setScore}) {
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
      })

  }

  function drawNewCard(cb) {
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
      .then(res => res.json())
      .then(res => {
        if (res.cards.length === 0){
          return navigate("/scorecard")
        }
        const drawnCard = res.cards[0];
        const drawnCardValue = drawnCard.value;
        const drawnCardExists = cb === "user" 
          ? playerHand.some(card => card.value === drawnCardValue && card.suit === drawnCard.suit) 
          : computerHand.some(card => card.value === drawnCardValue && card.suit === drawnCard.suit);

        if (!drawnCardExists) {
          if (cb === "user") {
            console.log("user should be drawing")
            setPlayerHand(prevPlayerHand => [...prevPlayerHand, drawnCard]);
          } else if (cb === "computer") {
            console.log("Computer should be drawing") 
            setComputerHand(prevComputerHand => [...prevComputerHand, drawnCard]);
          }
        } else {
          drawNewCard(cb);
        }
      })
  }

  return (
    <>
      <div>
        <button type="button" className="btn btn-info" onClick={displayNewDeck}>Click to Start:</button>
        <BothContainer computerHand={computerHand} playerHand={playerHand} drawNewCard={drawNewCard} setComputerHand={setComputerHand} setPlayerHand={setPlayerHand} player={player} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} score={score} setScore={setScore}/>
      </div>
    </>
  )
}
