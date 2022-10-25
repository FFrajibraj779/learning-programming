import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3 className='text-center'>page not found</h3>
             <p className='text-center'>Error 404</p>
             <p className='text-center'> <Link to='/'>back to home </Link></p>
        </div>
    );
};

export default ErrorPage;