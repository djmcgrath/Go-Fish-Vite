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

        console.log(filterCCards)
        let compCards = [...computerHand]

        filterCCards.forEach(element => {
            compCards = compCards.filter(compCard => compCard != element)
        });
        // console.log(compCards)
        setComputerHand(compCards)

        if (filterCCards.length > 0) {
            console.log("correct guess!")
            setPlayerHand([...playerHand, ...filterCCards])
            checkForFourOfAKind(playerHand)
        } else {
            drawNewCard("user")
            setPlayerTurn(!playerTurn)
        }
    }
    }

   
    // function checkPlayerHand(value){
    //     const cardSet = playerHand.filter((card)=>{
    //         return card.value == value
    //     })
    //     console.log(cardSet)
    //         if (cardSet.length()>3){
    //             handleRemove4(value)
    //         }
    // }
    
    function checkForFourOfAKind(hand) {
        const counts = {};
        const faceCards = ['Ace', 'King', 'Queen', 'Jack']; // Define face cards
    
        // Count occurrences of each card value
        hand.forEach(card => {
          const value = card.value;
          if (!counts[value]) {
            counts[value] = 1;
          } else {
            counts[value]++;
          }
        });
    
        // Check if any value appears exactly four times
        for (const value in counts) {
          if (counts[value] === 4 &&!faceCards.includes(value)) {
            console.log(`${value} of a kind found`);
            console.log(value)
            console.log(counts)
            return true; // Return true if four of a kind is found
          }
        }
        return false; // No four of a kind found
      }


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
            checkForFourOfAKind(computerHand)
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
            <button type="button" className="btn btn-warning" onClick={handleCPUTurn}>CPU's Turn</button>
            <div className='leftColumn'>
                <h3 className='handtext'>{`"Computer's" Hand:`}</h3>
                <div className='leftColumn'>
                    {computerHand.map((player, index) => (<CPCard key={index} player={player} compareComputerHand={compareComputerHand}/>))}
                </div>
            </div>  
            { playerTurn? <h1 className='turn'>{player.name}'s turn</h1> : <h1 className='turn'>Computer's turn</h1>}
            <div className='rightColumn'>
                <h3 className='handtext'>{`${player.name}\'s Hand:`}</h3>
                <div className='rightColumn'>
                    {playerHand.map((player, index) => (<HandCard key={index} player={player} comparePlayerHand={comparePlayerHand} />))}
                </div>
            </div>
        </div>
    )
}