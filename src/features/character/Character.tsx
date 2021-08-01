import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

interface Props {
  name: string;
  image: string;
  // status: string;
  species: string;
  gender: string;
}

export const Character = (props: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button style={{ fontSize: '.9em' }} variant="dark" onClick={handleShow}>
        <Image style={{ width: '6rem' }} src={props.image} rounded />
        <span style={{ fontSize: '.7em', display: 'grid', overflow: 'hidden' }}>
        {props.name}
        </span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <div style={{display: 'flex', fontSize: '.7em'}}>

        <Image style={{ height: '10rem', width: '9rem' }} src={props.image} />
        <ListGroup style={{width: '100%'}}>
          <ListGroup.Item>Species: {props.species}</ListGroup.Item>
          <ListGroup.Item>Gender: {props.gender}</ListGroup.Item>
        </ListGroup>
        </div>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Character
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

//   render(<Character />);
