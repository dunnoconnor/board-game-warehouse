import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GameDetail } from './GameDetail';
import { EditGame } from './modals/EditGame';
import { DeleteGame } from './modals/DeleteGame';

export const Game = ({game}) => {
  const initialState = {edit:false, delete:false}
  const [modal, setModal] = useState(initialState);
  const handleClose = () => setModal(initialState);
  const handleShow = (e) => setModal({...modal, [e.target.id]: true})

  return(
    <Card>
      <GameDetail game={game}/>
      <EditGame show={modal.edit} handleClose={handleClose} game={game}/>
      <DeleteGame show={modal.delete} handleClose={handleClose} game={game}/>
      <Card.Footer>
        <Button id="edit" variant='primary' onClick={handleShow}>Edit</Button>
        <Button id="delete" variant='secondary' onClick={handleShow}>Delete</Button>
        </Card.Footer>
    </Card>
  )
} 

	