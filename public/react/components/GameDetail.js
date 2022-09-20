import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import apiURL from '../api';

export const GameDetail = () => {
  const [game, setGame] = useState(null);
  let params = useParams();
  
  async function fetchGame(){
		try {
			const response = await fetch(`${apiURL}/games/${params.id}`);
			const gameData = await response.json();
			setGame(gameData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

useEffect(() => {
fetchGame();
}, []);

  return( game ? 
    <div className='card'>
        <img src={game.image} alt={game.title}/>
        <h2>{game.title}</h2>
        <p>Published: {game.year}</p>
        <p>Rating: {game.rating}</p>
        <p>Price: {game.price}</p>
        <p>In Stock: {game.stock}</p>
    </div> : <div></div>
  )
} 

	