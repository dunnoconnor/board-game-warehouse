import React, { useState, useEffect } from 'react';
import { GamesList } from './GamesList';
import { AddGameTab } from './AddGameTab';
import GameService from '../services/GameService';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
			<Tabs
			defaultActiveKey="inventory"
			id="uncontrolled-tab-example"
			className="mb-3"
			>
				<Tab eventKey="inventory" title="Inventory">
					<GamesList games={games}/>
				</Tab>
				<Tab eventKey="addGame" title="Add Game" >
					<AddGameTab/>
				</Tab>
			</Tabs>
		</main>
	)
}