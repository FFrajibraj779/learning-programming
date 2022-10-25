import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';


const Register = () => {

    const { createUser, userInfo, setUserInfo } = useContext(AuthContext);
    console.log(userInfo.email);
    const [error, setError] = useState({
        email: "",
        password: "",
        genarel: "",
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        createUser(userInfo.email, userInfo.password)
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
        console.log(email);
        const validEmail = /\S+@\S+\.\S+/.test(email);

        if (!validEmail) {
            setError({ ...error, email: "Please provide valid email" })
            setUserInfo({ ...userInfo, email: event.target.value })
        }
        else {
            setError({ ...error, email: "" })
            setUserInfo({ ...userInfo, email: event.target.value })
        }



    }

    const handlePassword = (event) => {
        const password = event.target.value;
        console.log(password);
        const UppercasePass = /(?=.*?[A-Z])/.test(password);
        const Digit = /(?=.*?[0-9])/.test(password);


        if (password.length < 6) {
            setError({ ...error, password: "password at least 6 character" })
            setUserInfo({ ...userInfo, password: event.target.value })
        }
        else if (!UppercasePass) {
            setError({ ...error, password: "password should be one Uppercase" })
            setUserInfo({ ...userInfo, password: event.target.value })
        }
        else if (!Digit) {
            setError({ ...error, password: 'password At least one digit' })
            setUserInfo({ ...userInfo, password: event.target.value })
        }
        else {
            setError({ ...error, password: "" })
            setUserInfo({ ...userInfo, password: event.target.value })
        }
    }

    return (
        <div>
            <div className='header-container '>


                <Form onSubmit={handleSubmit} className='login-container ' >
                    <h1 className='text-center title'>Please Register</h1>
                    <Form.Group className="mb-3 field" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Your Name" required />

                    </Form.Group>
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
                        <Button type='submit' className='registerBtn mt-3' variant="light">Register</Button>
                    </Form.Group>

                    <p className='text-center'>already have an account please <Link to='/' className='text-white'>log in</Link></p>

                    <Form.Text className="text-danger ">
                        {error.genarel &&
                            <p className='text-center'>{error.genarel}</p>
                        }
                    </Form.Text>
                </Form>

            </div>
        </div>
    );
};

export default Register;