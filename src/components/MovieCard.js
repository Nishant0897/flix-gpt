import React from 'react'


const MovieCard = ({ imagePath }) => {
    
  return (
    <div className='w-36 m-2 '>
      <img src={imagePath} alt='Poster'/>
    </div>
  )
}

export default MovieCard
