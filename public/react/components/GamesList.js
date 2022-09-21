import React from 'react';
import Container from 'react-bootstrap/Container';
import { Game } from './Game';

export const GamesList = ({games}) => {
	return <Container>
		{
			games.map((game, idx) => {
				return <Game className='Game' game={game} key={idx} />
			})
		}
	</Container>
} 
