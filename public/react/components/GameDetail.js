import React from 'react';
import Card from 'react-bootstrap/Card';

export const GameDetail = ({game}) => {

  return(
    <Card>
        <img src={game.image} alt={game.title}/>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>Published: {game.year}</Card.Text>
        <Card.Text>Rating: {game.rating}</Card.Text>
        <Card.Text>Price: {game.price}</Card.Text>
        <Card.Text>In Stock: {game.stock}</Card.Text>
    </Card>
  )
} 

	