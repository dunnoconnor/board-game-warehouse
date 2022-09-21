import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GameService from '../../services/GameService';

export const EditGame = ({show, handleClose, game}) => {
    
    const initialState = game;
    const [formState, setFormState]= useState(initialState)

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const handleSubmit = () => {
        GameService.updateGame(game.id, formState);
        handleClose();
    }
    
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{`Editing ${game.title}`}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" value={formState.price} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="stock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" value={formState.stock} onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </Modal.Body>
        </Modal>
    );
}

