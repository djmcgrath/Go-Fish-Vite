import React from 'react'
import HandCard from './PlayersHand/HandCard'
import CPCard from './ComputerHand/CPCard'
import { useEffect } from 'react'

export default function BothContainer({ playerHand, computerHand, drawNewCard, setPlayerHand, setComputerHand , player, playerTurn, setPlayerTurn, score, setScore}) {

    function comparePlayerHand (card) {
        if(playerTurn === false){
            alert(`It is the computer's turn`)
        } else{
            const filterCCards = computerHand.filter(computerCard => computerCard.value === card);
        
            if (filterCCards.length > 0) {
                console.log("User correct guess")
                const newPlayerHand = [...playerHand, ...filterCCards];
                setPlayerHand(newPlayerHand);
                checkForFourOfAKind(playerHand)
                const newCompHand = computerHand.filter(computerCard => computerCard.value !== card);
                setComputerHand(newCompHand);
                console.log(computerHand)
            } else {
                drawNewCard("user");
                setPlayerTurn(false);
            }
        // old Code:
        // const filterCCards = computerHand.filter((computerCard) => {
        //     return computerCard.value === card})

        // console.log(filterCCards)
        // let compCards = [...computerHand]

        // filterCCards.forEach(element => {
        //     compCards = compCards.filter(compCard => compCard != element)
        // });
        // // console.log(compCards)
        // const newCompHand = compCards
        // setComputerHand(newCompHand)

        // if (filterCCards.length > 0) {
        //     console.log("correct guess!")
        //     const newPlayerHand = [...playerHand, ...filterCCards]
        //     setPlayerHand(newPlayerHand)
        //     // checkForFourOfAKind(playerHand)
        // } else {
        //     drawNewCard("user")
        //     setPlayerTurn(false)
        // }
    }}

   
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
        const counts = {}
        const faceCards = ['Ace', 'King', 'Queen', 'Jack'] // Define face cards
    
        // Count occurrences of each card value
        hand.forEach(card => {
          const value = card.value
          if (!counts[value]) {
            counts[value] = 1
          } else {
            counts[value]++
          }
        })
    
        for (const value in counts) {
          if (counts[value] === 4 &&!faceCards.includes(value)) {
            console.log(`four ${value}'s found`)
            const newHand = hand.filter(card => card.value !== value)

            if (hand === playerHand){
                setPlayerHand(newHand)
            } else if (hand === computerHand){
                setPlayerHand(newHand)
            }

            setScore(score => score +1)
            console.log(score)
            return true // Return true if four of a kind is found
          }
        }
        return false // No four of a kind found
      }


    function compareComputerHand (card) {
        if (playerTurn === true){
            alert(`It is ${player.name}'s turn`)
        } else {
            const filterPCards = playerHand.filter(playerCard => playerCard.value === card);
        
            if (filterPCards.length > 0) {
                console.log("computer correct guess")
                console.log(filterPCards)
                const newPlayerHand = playerHand.filter(playerCard => playerCard.value !== card);
                setPlayerHand(newPlayerHand);
                console.log(playerHand)
                setTimeout(() => {
                    const newComputerHand = [...computerHand, ...filterPCards];
                    setComputerHand(newComputerHand);
                    console.log(computerHand)
                    checkForFourOfAKind(computerHand)
                    handleCPUTurn()
                },2000)
            // old Code:
            // const filterPCards = playerHand.filter((playerCard) => {
            //     return playerCard.value === card})
    
            // let playerCards = [...playerHand]
    
            // filterPCards.forEach(element => {
            //     playerCards = playerCards.filter(playCard => playCard != element)
            // });

            // const newCPlayerHand = playerCards

            // setPlayerHand(newCPlayerHand)
    
            // if (filterPCards.length > 0) {
            //     console.log("computer is correct")
            //     const newCComputerHand = [...computerHand, ...filterPCards]
            //     setComputerHand(newCComputerHand)
            //     setTimeout(() => {
            //         handleCPUTurn()
            //     },2000)
            //     // setPlayerTurn(false)
            //     // console.log("set player turn to false")
            //     // checkForFourOfAKind(computerHand)
            } else {
                drawNewCard("computer")
                setPlayerTurn(true)
            }
        }
     }

    useEffect( () => {
        if (playerTurn === false) {
            setTimeout(() => {
                handleCPUTurn()
            }, 2000)
        }
    }, [playerTurn]) 

    function handleCPUTurn(){
        let randomCard = computerHand[Math.floor(Math.random() * computerHand.length)]
        compareComputerHand(randomCard.value)
    }


    return (
        <div>
            <div className='leftColumn'>
                <h3 className='handtext'>{`"Computer's" Hand:`}</h3>
                <div className='leftColumn'>
                    {computerHand.map((player, index) => (<CPCard key={index} player={player} compareComputerHand={compareComputerHand}/>))}
                </div>
            </div>  
            { playerTurn === true ? <h1 className='turn'>{player.name}'s turn</h1> : <h1 className='turn'>Computer's turn</h1> }
            <div className='rightColumn'>
                <h3 className='handtext'>{`${player.name}\'s Hand:`}</h3>
                <div className='rightColumn'>
                    {playerHand.map((player, index) => (<HandCard key={index} player={player} comparePlayerHand={comparePlayerHand} />))}
                </div>
            </div>
        </div>
    )
}
