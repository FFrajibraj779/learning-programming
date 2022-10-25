import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {


    const { emailSignIn, userInfo,googleSignIn } = useContext(AuthContext);
    console.log(userInfo.email);
    const [error, setError] = useState({
        email: "",
        password: "",
        genarel: "",
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        emailSignIn(userInfo.email, userInfo.password)
            .then(result => {
                form.reset();
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                setError({ ...error, general: err.message })
                console.log(error);
            })
    }

    const handleEmailChange = (event) => {
        const email = event.target.value;
    
    }

    const handlePassword = (event) => {
        const password = event.target.value;
       
    }

    return (
        <div className='header-container '>


        <Form onSubmit={handleSubmit} className='login-container ' >
            <h1 className='text-center title'>Please Log In</h1>
           
            <Form.Group className="mb-3 field" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleEmailChange} required />
                <Form.Text className="text-white text-center">
                    {error.email &&
                        <p className='text-center'>{error.email}</p>
                    }
                </Form.Text>

            </Form.Group>

            <Form.Group className="mb-3 field" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" onChange={handlePassword} required />
                <Form.Text className="text-white  ">
                    {error.password &&
                        <p className='text-center'>{error.password}</p>
                    }
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className='text-center'>
                <Button type='submit' className='registerBtn mt-3' variant="light">Log In</Button>
            </Form.Group>

            <p className='text-center'>create a new account <Link to='/register' className='text-white'>register</Link></p>

            <Form.Text className="text-danger ">
                {error.genarel &&
                    <p className='text-center'>{error.genarel}</p>
                }
            </Form.Text>
        
           
        </Form>
        <div className='text-center googleBtn'>
         <Button type='submit' size='lg'
         
         variant='light'        
         onClick={googleSignIn}
         className='registerBtn'><FaGoogle/> Login With Google</Button>
         </div>

    </div>

    );
};

export default Login;