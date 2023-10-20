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

    // handleRemove4(value)

    // function checkPlayerHand(value){
    //     const cardSet = playerHand.filter((card)=>{
    //         return card.value == value
    //     })
    //     if (cardSet.length()>3){
    //         handleRemove4(value)
    //     }
    // }



    function compareComputerHand (card) {
        const filterPCards = playerHand.filter((playerCard) => {
            return playerCard.value === card})

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
            compareComputerHand(randomCard.value)  
        }
    }


    return (
        <div>
            <div>
                <h3 className='handtext'>{`"Computer's" Hand:`}</h3>
                {computerHand.map((player, index) => (<CPCard key={index} player={player} compareComputerHand={compareComputerHand}/>))}
            </div>
            <button type="button" className="btn btn-warning" onClick={handleCPUTurn}>CPU's Turn</button>
            { playerTurn? <h1 className='turn'>{player.name}'s turn</h1> : <h1 className='turn'>Computer's turn</h1>}
            <div>
                <h3 className='handtext'>{`${player.name}\'s Hand:`}</h3>
                {playerHand.map((player, index) => (<HandCard key={index} player={player} comparePlayerHand={comparePlayerHand} />))}
            </div>
        </div>
    )
}