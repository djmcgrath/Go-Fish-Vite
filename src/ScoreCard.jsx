import {useLoaderData} from 'react-router-dom'

export default function ScoreCard ({playerInfo}) {
  // const players = useLoaderData()

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
