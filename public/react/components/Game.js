import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { GameDetail } from './GameDetail';
import { EditGameModal } from './modals/EditGameModal';
import { DeleteGameModal } from './modals/DeleteGameModal';

export const Game = ({game}) => {
  const initialState = {edit:false, delete:false}
  const [modal, setModal] = useState(initialState);
  const handleClose = () => setModal(initialState);
  const handleShow = (e) => setModal({...modal, [e.target.id]: true})

  return(
    <Card>
      <GameDetail game={game}/>
      <EditGameModal show={modal.edit} handleClose={handleClose} game={game}/>
      <DeleteGameModal show={modal.delete} handleClose={handleClose} game={game}/>
      <Card.Footer>
        <Button id="edit" variant='primary' onClick={handleShow}>Edit</Button>
        <Button id="delete" variant='secondary' onClick={handleShow}>Delete</Button>
      </Card.Footer>
    </Card>
  )
} 

	