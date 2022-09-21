import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const EditGame = ({show,handleClose, game}) => {
    
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editing Game</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder={game.price} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" placeholder={game.stcok} />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </Modal.Body>
        </Modal>
    );
}

