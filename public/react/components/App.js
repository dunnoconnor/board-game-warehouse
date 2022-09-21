import React, { useState, useEffect } from 'react';
import { GamesList } from './GamesList';
import apiURL from '../api';

export const App = () => {

	const [games, setGames] = useState([]);

	async function fetchGames(){
		try {
			const response = await fetch(`${apiURL}/games`);
			const gamesData = await response.json();
			
			setGames(gamesData);
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		fetchGames();
	}, []);

	return (
		<main>	
			<h1>Board Game Warehouse</h1>
			<GamesList games={games}/>
		</main>
	)
}