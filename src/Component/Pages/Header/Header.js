import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/c-removebg-preview.png'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className=''>
            <Navbar expand="lg"  className='bg-color bg-primary'>
                <Container fluid className='' >
                    <Navbar.Brand> <Link to='/' className=' navlink' ><Image style={{ height: '40px', color: 'white', background: '' }} src={logo}></Image> Learning Programming</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                        </Nav>
                        <div className='d-lg-flex gap-3'>
                            <Nav.Link> <Link className='menubar sm-text-center' to="/">Home</Link></Nav.Link>
                            <Nav.Link> <Link className='menubar sm-text-center' to="/">Content </Link></Nav.Link>
                            <Nav.Link> <Link className='menubar sm-text-center' to="/register">Register</Link></Nav.Link>
                            <Nav.Link> <Link className='menubar sm-text-center' to="/lo">Log In</Link></Nav.Link>
                            <Nav.Link> <Link className='menubar  text-center' to="/">FAQ</Link></Nav.Link>
                            <Nav.Link> <Link className='menubar sm-text-center' to="/">Blogs</Link></Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    );
};

export default Header;