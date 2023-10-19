import React from 'react'
import HandCard from './PlayersHand/HandCard'
import CPCard from './ComputerHand/CPCard'

export default function BothContainer({ playerHand, computerHand, drawNewCard, setPlayerHand, setComputerHand , player, playerTurn, setPlayerTurn}) {

    function comparePlayerHand (card) {
        if(playerTurn === false){
            alert(`It is the computer's turn`)
        } else{
        const filterCCards = computerHand.filter((computerCard) => {
            return computerCard.value === card})
        console.log(card)

        let compCards = [...computerHand]

        filterCCards.forEach(element => {
            compCards = compCards.filter(compCard => compCard != element)
        });
        setComputerHand(compCards)

        if (filterCCards.length > 0) {
            console.log("correct guess!")
            setPlayerHand([...playerHand, ...filterCCards])
        } else {
            drawNewCard("user")
            setPlayerTurn(!playerTurn)
        }
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

        if (filterPCards.length > 0) {
            console.log("computer is correct")
            setComputerHand([...computerHand, ...filterPCards])
        } else {
            drawNewCard("computer")
            setPlayerTurn(!playerTurn)
        }
    }


    function handleCPUTurn(){
        if(playerTurn === true){
            alert(`It is ${player.name}'s turn`)
        } else{
            let randomCard = computerHand[Math.floor(Math.random() * computerHand.length)]
            console.log(randomCard.value)
            compareComputerHand(randomCard.value)  
        }
    }


    return (
        <div>
            <div>
                <h3 className='handtext'>{`"Computer's" Hand:`}</h3>
                <div>
                    <button type="button" className="btn btn-danger" onClick={handleCPUTurn}>CPU's Turn</button>
                </div>
                {computerHand.map((player, index) => (<CPCard key={index} player={player} compareComputerHand={compareComputerHand}/>))}
            </div>
            <div>
                <h3 className='handtext'>{`${player.name}\'s Hand:`}</h3>

                {playerHand.map((player, index) => (<HandCard key={index} player={player} comparePlayerHand={comparePlayerHand} />))}
                   
            </div>
        </div>
    )
}