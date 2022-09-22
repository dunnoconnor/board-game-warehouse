import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AddGameModal } from './modals/AddGameModal';

export const BGGCard = ({bggItem}) => {
    const [addModal, setAddModal] = useState(false);
    const handleClose = () => setAddModal(false);
    const handleShow = () => setAddModal(true);

    let year = 'undated';
    try {
        year = bggItem.yearpublished.value
    } catch (err) {
        console.log("missing json data")
    }

    return(
        <Card>
            <Card.Title>{bggItem.name.value}</Card.Title>
            <Card.Text>Published: {year}</Card.Text>
            <Card.Text>ID: {bggItem.id}</Card.Text>
            <AddGameModal show={addModal} handleClose={handleClose} bggItem={bggItem}/>
            <Button id="add" variant='primary' onClick={handleShow}>Add to Warehouse</Button>
        </Card>
    )
  } 