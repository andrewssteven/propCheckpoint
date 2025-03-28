import React from 'react'
import { playerdata } from '../players'
import Player from './Player'


const PlayerLists = () => {
  return (
    <div className='grid grid-cols-4 gap-7 mx-15 mt-5'>
        {playerdata.map((player) => ( <Player name={player.name} team={player.team} 
        nationality={player.nationality} jerseynumber={player.jerseynumber} age={player.age}
        image={player.image}
        />))}
    </div>
  )
}

export default PlayerLists