import { Navbar, Container, NavDropdown, Nav, Image} from "react-bootstrap";

import React from 'react'

interface Props {
    
}

export const Header = (props: Props) => {
    return (
        <>
            <Navbar style={{backgroundColor: '#8c5c62'}} expand="lg">
  <Container>
  <Navbar.Brand href="#home">
{/* https://i.pinimg.com/originals/f1/5d/c4/f15dc41a01e84e775c9b5130fa1c9633.jpg */}
      {/* <img
        src="https://banner2.cleanpng.com/20180402/rqe/kisspng-rick-sanchez-t-shirt-morty-smith-drawing-clip-art-rick-and-morty-5ac21f428a7993.1712972215226714265672.jpg"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}
            </Navbar.Brand>
            {/* <Image src="/public/rm1.png" /> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Dashboard</Nav.Link>
        {/* <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}
