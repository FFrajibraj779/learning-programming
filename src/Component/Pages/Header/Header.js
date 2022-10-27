import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/c-removebg-preview.png'
import '../Style/style.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import {useContext} from 'react'
import { FaUser } from 'react-icons/fa';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../../App';


const Header = () => {
    const{userInfo,handleSignOut} = useContext(AuthContext);
    const{theme, toggleTheme} =useContext(ThemeContext);
    console.log(userInfo);
    return (
        <div className=''>
            <Navbar expand="lg" className='bg-color bg-primary'>
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
                            <Nav.Link> <Link className='menubar ' to="/">Home</Link></Nav.Link>
                            <Nav.Link> <Link className='menubar ' to="/tutorial">Courses </Link></Nav.Link>                                         
                           <Nav.Link> <Link className='menubar ' to="/faq">FAQ</Link></Nav.Link>
                            <Nav.Link> <Link className='menubar ' to="/blog">Blogs</Link></Nav.Link>
                            <Nav.Link> <Link className='menubar ' to="/theme"><ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/></Link></Nav.Link>
                            {
                                userInfo?.uid ? 
                                 <>
                                  <Nav.Link> <Link onClick={handleSignOut} className='menubar ' to="/login">Sign Out</Link></Nav.Link>
                                  <Image referrerPolicy='no-referrer' title={userInfo?.displayName} roundedCircle style={{height:'40px'}} src={userInfo?.photoURL ? userInfo?.photoURL : <FaUser/> } ></Image>
                             
                                </>
                                :
                                <>
                                 <Nav.Link> <Link className='menubar ' to="/register">Register</Link></Nav.Link>
                                <Nav.Link> <Link className='menubar ' to="/login">Log In</Link></Nav.Link>
                                </>
                             }
                             
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;