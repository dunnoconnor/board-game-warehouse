import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GameDetail } from './GameDetail';
import { EditGame } from './modals/editGame';

export const Game = ({game}) => {
  const [editModal, setEditModal] = useState(false);
  const handleClose = () => setEditModal(false);
  const handleShow = () => setEditModal(true);

  return(
    <Card>
      <GameDetail game={game}/>
      <EditGame show={editModal} handleClose={handleClose} game={game}/>
      <Button onClick={handleShow}>Edit</Button>
    </Card>
  )
} 

	