import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GameService from '../../services/GameService';

export const DeleteGameModal = ({show, handleClose, game}) => {

    const handleSubmit = (e) => {
        GameService.deleteGame(game.id);
        handleClose();
    }
    
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{`Delete ${game.title}?`}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            </Modal.Body>
        </Modal>
    );
}

