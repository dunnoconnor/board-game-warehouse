import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const EditGame = ({show,handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editing Game</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>price</Form.Label>
                    <Form.Control type="text" placeholder="$59" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>stock</Form.Label>
                    <Form.Control type="text" placeholder="10" />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </Modal.Body>
        </Modal>
    );
}

