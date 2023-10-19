// import { useEffect, useState } from "react"
export default function ScoreCard ({playerHand, computerHand, playerInfo, player}) {
//   const [score, setScore] = useState({
//     wins: player.wins,
//     losses: player.losses
//   })
//   console.log(score)


// function handleAddScore () {

//   fetch(`http://localhost:3000/players/${player.id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(score)
//   })
//   .then((res) => res.json())
// }

// useEffect(() =>{
//   handleWinning()
// }, [playerHand])

// function handleWinning(){
//   if(playerHand.length > computerHand.length && playerHand.length + computerHand.length == 51){
//     setScore(score.wins+1)
//     handleAddScore()
//   } else if(playerHand.length < computerHand.length && playerHand.length + computerHand.length == 51){
//     setScore(score.losses+1)
//     handleAddScore()
//   } else{
//     console.log("No Winner Yet")
//   }
// }


  const tdName = playerInfo.map((player) => (
    <tr key={player.id} scope="row">
      <td>{player.name}</td>
      <td>{player.wins}</td>
      <td>{player.losses}</td> 
    </tr> 
  ))



  return (
        <table className='table table-bordered'>
          <thead>
              <tr>
                <th scope='col'>Players</th>
                <th scope='col'>Wins</th>
                <th scope='col'>Losses</th>
              </tr>
            </thead>
            <tbody>
              {tdName} 
          </tbody>
        </table>
  )
}
