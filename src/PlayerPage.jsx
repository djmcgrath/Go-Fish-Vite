import {useLoaderData} from 'react-router-dom'

export default function PlayerPage () {
  const players = useLoaderData()

  const options = players.map(player => (
    <option key={player.id} value={player.id}>{player.name}</option>
  ));
  

  return (
    <select>
      {options}
    </select>
  );
};

