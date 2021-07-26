import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


interface Props {
    name: string;
    image: string;
    // status: string;
    species: string;
    gender: string;
}

export const Character = (props: Props) => {
    return (
        <div >
            <Card text='light' bg='dark' border="dark" style={{ width: '9.5rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
    Name: {props.name}
    </Card.Text>
    <Card.Text>
    Species: {props.species}
    </Card.Text>
    <Card.Text>
    Gender: {props.gender}
    </Card.Text>
    {/* <ListGroup>
                        <ListGroup.Item>Name: {props.name}</ListGroup.Item>
                        <ListGroup.Item>Species: {props.species}</ListGroup.Item>
                        <ListGroup.Item>Gender: {props.gender}</ListGroup.Item>
</ListGroup> */}
  </Card.Body>
</Card>
        </div>
    )
}
