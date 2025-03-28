import React from 'react'

const Player = ({name, team, nationality,jerseynumber, age, image}) => {
  return (
    <div className='p-3 bg-[#1E1E2E] text-[#F8D210] rounded-md shadow-md'>
       <img src={image} alt="" className='h-60 w-full object-contain'  /> 
       <h2>{name}</h2>
       <p>{nationality}</p>
       <p>{team}</p>
       <p>{jerseynumber}</p>
       <p>{age}</p>
    </div>
  )
}

export default Player