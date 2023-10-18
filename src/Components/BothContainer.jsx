import React from 'react'
import HandCard from './PlayersHand/HandCard'
import CPCard from './ComputerHand/CPCard'

export default function BothContainer({ playerHand, computerHand, drawNewCard, setPlayerHand, setComputerHand }) {

    function comparePlayerHand (card) {
        const filterCCards = computerHand.filter((computerCard) => {
            return computerCard.value === card})
        console.log(card)

        let compCards = [...computerHand]

        filterCCards.forEach(element => {
            compCards = compCards.filter(compCard => compCard != element)
            console.log(compCards)
            
        });
        setComputerHand(compCards)

        if (filterCCards.length > 0) {
            console.log("correct guess!")
            setPlayerHand([...playerHand, ...filterCCards])
        } else {
            drawNewCard("user")
        }
    }

    function compareComputerHand (card) {
        const filterPCards = playerHand.filter((playerCard) => {
            return playerCard.value === card})
        console.log(filterPCards)

        let playerCards = [...playerHand]

        filterPCards.forEach(element => {
            playerCards = playerCards.filter(playCard => playCard != element)
        });
        setPlayerHand(playerCards)
        console.log(playerHand)

        if (filterPCards.length > 0) {
            console.log("computer is correct")
            setComputerHand([...computerHand, ...filterPCards])
        } else {
            drawNewCard("computer")
        }
    }


    return (
        <div>
            <div>
                <h3>Computer's Hand: </h3> 
            
                {computerHand.map((player, index) => (<CPCard key={index} player={player} compareComputerHand={compareComputerHand}/>))}
            </div>
            <div>
                <h3>Player's Hand: </h3>

                {playerHand.map((player, index) => (<HandCard key={index} player={player} comparePlayerHand={comparePlayerHand} />))}
                   
            </div>
        </div>
    )
}