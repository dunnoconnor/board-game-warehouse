import React, { useState, useEffect } from 'react';
import { GamesList } from './GamesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [games, setGames] = useState([]);

	async function fetchGames(){
		try {
			const response = await fetch(`${apiURL}/games`);
			const gamesData = await response.json();
			
			setGames(gamesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchGames();
	}, []);

	return (
		<main>	
      <h1>Board Game Warehouse</h1>
			<h2>Current Inventory</h2>
			<GamesList games={games} />
		</main>
	)
}