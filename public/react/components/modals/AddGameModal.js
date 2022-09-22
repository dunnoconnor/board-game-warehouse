import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GameService from '../../services/GameService';
import { getBggThing } from 'bgg-xml-api-client';

export const AddGameModal = ({show, handleClose, bggItem}) => {
    
    const [game, setGame] = useState("");
    const [formState, setFormState]= useState({})
    
    async function fetchBGGThing(){
        try {
            const { data } = await getBggThing({ id: bggItem.id });
            setGame(data.item);
          } catch (error) {
            console.log('not found');
          }
    }

    useEffect(() => {
		fetchBGGThing();
	}, [show]);


    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value});
    }

    const handleSubmit = () => {
        const newGame = {
            title: game.name.value,
            year: game.yearpublished.value,
            image: game.image,
            rating: game.rating,
            price: formState.price,
            description: game.description,
            stock: formState.stock,
        };
        GameService.createGame(newGame);
        handleClose();
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{`Adding ${bggItem.name.value} to warehouse`}</Modal.Title>
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

