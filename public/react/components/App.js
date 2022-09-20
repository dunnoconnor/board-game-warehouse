import React, { useState, useEffect } from 'react';
import { GamesList } from './GamesList';
import apiURL from '../api';
import { Routes, Route } from 'react-router-dom';
import { GameDetail } from './GameDetail';

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
			<Routes>
				<Route path="/" element={<GamesList games={games}/>}/>
				<Route path="/games/:id" element={<GameDetail/>}/>
			</Routes>
		</main>
	)
}