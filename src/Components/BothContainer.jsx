import React from 'react'
import HandCard from './PlayersHand/HandCard'
import CPCard from './ComputerHand/CPCard'

export default function BothContainer({ playerHand, computerHand, drawNewCard }) {


    const computerCards = (computerHand.map((player) => player.value))
    console.log(computerCards)
    console.log(computerHand)

    function compareCards(card) {
        const findCards = computerHand.find((computerCard) => {
            return computerCard.value === card})
        
        console.log(findCards)

        if (findCards.value === card) {
            console.log("inside")
            drawNewCard("computer")
        } else {
            drawNewCard("user")
        }
    }
    return (
        <div>
            <div>
                {computerHand.map((player, index) => (<CPCard key={index} player={player} />))}
            </div>
            <div>
                {playerHand.map((player, index) => (<HandCard key={index} player={player} compareCards={compareCards} />))}
            </div>
        </div>
    )
}