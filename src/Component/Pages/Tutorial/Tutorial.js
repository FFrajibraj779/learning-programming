import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tutorial = () => {
    const courseInfo = useLoaderData();
    console.log(courseInfo);

    return (
        <div>
            <h1>tutorial section </h1>
        </div>
    );
};

export default Tutorial;