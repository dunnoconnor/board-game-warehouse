import React from 'react';
import { Game } from './Game';

export const GamesList = ({games}) => {
	return <div className='flex-container'>
		{
			games.map((game, idx) => {
				return <Game className='Game' game={game} key={idx} />
			})
		}
	</div>
} 
