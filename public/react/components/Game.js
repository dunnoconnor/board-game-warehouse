import React from 'react';
import Card from 'react-bootstrap/Card';

export const Game = ({game}) => {

  return(
    <Card>
      <a href={`/games/${game.id}`}>
        <Card.Img src={game.image} alt={game.title}/>
      </a>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>Published: {game.year}</Card.Text>
        <Card.Text>Rating: {game.rating}</Card.Text>
        <Card.Text>Price: {game.price}</Card.Text>
        <Card.Text>In Stock: {game.stock}</Card.Text>
    </Card>
  )
} 

	