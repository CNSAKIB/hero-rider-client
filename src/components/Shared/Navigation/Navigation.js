import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.jpg'
const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar bg="danger" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    {' '}
                    <h1 className='text-white'> Hero Rider</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-75 mx-auto">
                        <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                        {user?.email && <Nav.Link className='text-white' as={NavLink} to="/dashboard">Dashboard</Nav.Link>}
                        {user?.email && <small className="mx-4 mt-2 text-white">Welcome,{user?.displayName}</small>}
                        {user?.email ? <Button className="mt-1" onClick={logout} variant="dark">
                            Logout
                        </Button> :
                            <Nav.Link className='text-white' as={NavLink} to="/Login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;