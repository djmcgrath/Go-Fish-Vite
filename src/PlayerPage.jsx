import {useState} from 'react'

export default function PlayerPage ({handleNewPlayer, playerInfo}) {
  const [playerForm, setPlayerForm] = useState({
    name: "",
    wins: 0,
    losses: 0
  })
  // const players = useLoaderData()

  const options = playerInfo.map(player => (
    <option key={player.id} value={player.id}>{player.name}</option>
  ));
  
  function handleChange (e) {
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
  return (
    <div>
      <select>
        {options}
      </select>
      <form onSubmit={handleSubmit}>
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

