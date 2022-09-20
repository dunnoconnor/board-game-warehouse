import React from 'react';

export const Game = ({game}) => {

  return(
    <div className='card'>
      <a href={`/games/${game.id}`}>
        <img src={game.image} alt={game.title}/>
      </a>
        <h2>{game.title}</h2>
        <p>Published: {game.year}</p>
        <p>Rating: {game.rating}</p>
        <p>Price: {game.price}</p>
        <p>In Stock: {game.stock}</p>
        
    </div>
  )
} 

	