import {useState} from 'react'
import {useNavigate} from "react-router-dom"


export default function PlayerPage ({handleNewPlayer, playerInfo,setPlayer}) {

  const navigate = useNavigate()
  const [playerForm, setPlayerForm] = useState({
    name: "",
    wins: 0,
    losses: 0
  })
  // const players = useLoaderData()

  const options = playerInfo.map((player, index) => (
    <option key={player.id} value={index}>{player.name}</option>
  ));
  
  function handleChange(e) {
    setPlayerForm({
        ...playerForm,
        [e.target.name]: e.target.value
    })
}

function handleSubmit (e) {
    e.preventDefault()
    const playerData = {
        name: playerForm.name,
        wins: 0,
        losses: 0
    }
    fetch("http://localhost:3000/players", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(playerData)
      })
      .then((res) => res.json())
      .then((newPlayer) => {
        handleNewPlayer(newPlayer)
        setPlayerForm({
            name: ""
        })
    })

}

function changeUser(e){
  setPlayer(playerInfo[e.target.value])
  navigate("/game")
}
  return (
    <div>
      <select className="dropdown" onChange={(e)=>changeUser(e)}>
        {options}
      </select>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text" 
          name="name" 
          placeholder="Name"
          value = {playerForm.name}
          onChange={handleChange} 
        />
      </form>
    </div>
  );
};

