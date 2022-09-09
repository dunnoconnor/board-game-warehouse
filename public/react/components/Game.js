import React from 'react';

export const Game = ({game}) => {

  return(
    <div>
        <img src={game.image} alt={game.title}/>
        <h2>{game.title}</h2>
        <p>Published: {game.year}</p>
        <p>Rating: {game.rating}</p>
        <p>Price: {game.price}</p>
        <p>In Stock: {game.stock}</p>
    </div>
  )
} 

	