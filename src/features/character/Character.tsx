import React, { useState } from 'react'


import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'


interface Props {
    name: string;
    image: string;
    // status: string;
    species: string;
    gender: string;
}

// export const Character = (props: Props) => {
//     return (
//         <div >
//             <Card text='light' bg='dark' border="dark" style={{ width: '9rem', fontSize: '.8em' }}>
//   <Card.Img variant="top" src={props.image} />
//   <Card.Body>
//     <Card.Title style={{fontSize: '1.3em'}}>{props.name}</Card.Title>
//     <Card.Text>
//     Name: {props.name}
//     </Card.Text>
//     <Card.Text>
//     Species: {props.species}
//     </Card.Text>
//     <Card.Text>
//     Gender: {props.gender}
//     </Card.Text>
//     {/* <ListGroup>
//                         <ListGroup.Item>Name: {props.name}</ListGroup.Item>
//                         <ListGroup.Item>Species: {props.species}</ListGroup.Item>
//                         <ListGroup.Item>Gender: {props.gender}</ListGroup.Item>
// </ListGroup> */}
//   </Card.Body>
// </Card>
//         </div>
//     )
// }


export const Character = (props: Props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div>
            <Button style={{fontSize: '.9em'}} variant="dark"  onClick={handleShow}>
            <Image style={{width: '2.5rem'}} src={props.image} rounded />
          {props.name .length <= 10 ? props.name : props.name.slice(0, 7) + "..."}
        </Button>
  
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.name}</Modal.Title>
          </Modal.Header>
          
  <Image style={{height: '10rem', width: '9rem'}} src={props.image} />
  <ListGroup>
                    <ListGroup.Item>{props.species}</ListGroup.Item>
  <ListGroup.Item>{props.gender}</ListGroup.Item>
</ListGroup>
   
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  
//   render(<Character />);