import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from "react-router-dom";
import apiURL from '../api';
import { GameCard } from './GameCard';
import { EditGame } from './modals/EditGame';

export const GameDetail = () => {
  const [game, setGame] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const handleClose = () => setEditModal(false);
  const handleShow = () => setEditModal(true);
  
  let params = useParams();
  let navigate = useNavigate();
  
  async function fetchGame(){
		try {
			const response = await fetch(`${apiURL}/games/${params.id}`);
			const gameData = await response.json();
			setGame(gameData);
		} catch (err) {
			console.error(err)
		}
	}

  async function deleteGame(){
		try {
			await fetch(`${apiURL}/games/${params.id}`, {method:'DELETE'});
      navigate('/games')
		} catch (err) {
			console.error(err)
		}
	}

useEffect(() => {
fetchGame();
}, []);

  return( game ? 
    <div>
      <GameCard game={game}/>
      <EditGame show={editModal} handleClose={handleClose}/>
      <Button onClick={handleShow}>Edit</Button>
    </div> : <div>loading...</div>
  )
} 

	