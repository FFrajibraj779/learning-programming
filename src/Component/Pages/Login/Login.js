import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { emailSignIn, userInfo, googleSignIn, setUserInfo ,githubSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({
        email: "",
        password: "",
        genarel: "",
    });
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 
        emailSignIn(email, password)
            .then(result => {

                // navigate(from, { replace: true })
                navigate('/')
                const user = result.user;
                form.reset();
                console.log(user);
            })
            .catch(err => {
                setError({ ...error, general: err.message })
                console.log(error);
            })
    }
const handleGoogleSignIn  = () =>{
    const googleProvider = new GoogleAuthProvider();
    googleSignIn(googleProvider)
       .then(()=>{
        navigate('/')
       })
       .catch(err=>{
        setError({ ...error, general: err.message })
       })  

}
const handleGithubSignIn = () =>{
    const GithubProvider = new GithubAuthProvider();
    githubSignIn(GithubProvider)
    .then(()=>{
        navigate('/')
    })
    .catch(err=>{
        setError({ ...error, general: err.message })
        console.log(err);
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
                <Button  type='submit' size='lg'

                    variant='light'
                    onClick={handleGoogleSignIn}
                    className='registerBtn '><FaGoogle /> Login With Google</Button>
                <Button type='submit' size='lg'

                    variant='light'
                    onClick={handleGithubSignIn}
                    className='registerBtn mt-1 '><FaGithub /> Login With Github</Button>
            </div>

        </div>

    );
};

export default Login;