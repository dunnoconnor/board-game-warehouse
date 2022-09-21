import React, { useState, useEffect } from 'react';
import { GamesList } from './GamesList';
import GameService from '../services/GameService';

export const App = () => {

	const [games, setGames] = useState([]);

	async function fetchGames(){
		try {
			const response = await GameService.getAllgames();
			setGames(response.data);
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