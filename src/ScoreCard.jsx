import { useEffect, useState } from "react"

export default function ScoreCard ({playerHand, computerHand, playerInfo, player, setPlayer, setPlayerInfo}) {

  const [score, setScore] = useState({
    wins: player.wins,
    losses: player.losses
  })

function handleAddScore (score) {
  fetch(`http://localhost:3000/players/${player.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(score)
  })
  .then((res) => res.json())
  .then((res) => 
    {
      setPlayer((prevPlayer) => ({
        ...prevPlayer, wins: res.wins, losses: res.losses
      }))
      replacePlayer(res)
    })
}

const replacePlayer = (newPlayer) => {
  setPlayerInfo (prevArray => {
    const index = prevArray.findIndex(obj => obj.id === newPlayer.id)
    if (index !== -1){
      return [
        ...prevArray.slice(0,index), 
        newPlayer,
        ...prevArray.slice(index+1)
      ]
    }else {
      return prevArray
    }
  })
}

useEffect(() => {

  if(playerHand.length > computerHand.length){
    let newScore =  {...score, wins: score.wins +1}
    setScore(newScore)
    handleAddScore(newScore)
  } else if(playerHand.length < computerHand.length){
    let newLosses =  {...score, losses: score.losses +1}
    setScore(newLosses)
    handleAddScore(newLosses)
  } else{
    console.log("No Winner Yet")
  }
},[playerHand, computerHand])

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
