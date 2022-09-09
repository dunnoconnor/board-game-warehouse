import React from 'react';
import { Game } from './Game';

export const GamesList = ({games}) => {
	return <>
		{
			games.map((game, idx) => {
				return <Game game={game} key={idx} />
			})
		}
	</>
} 
