import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div>
            <div className='header-container '>
               

                <Form className='login-container '>
                <h1 className='text-center title'>Please Register</h1>
                    <Form.Group className="mb-3 field" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control  type="text" placeholder="Enter Your Name" />
                        
                    </Form.Group>
                    <Form.Group className="mb-3 field" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3 field" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                   <div className='text-center'>
                   <Button className='registerBtn mt-3' variant="light">Register</Button>
                   <p>already have an account please <Link to='/' className='text-white'>log in</Link></p>
                   </div>
                </Form>
                <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
            </div>
        </div>
    );
};

export default Register;