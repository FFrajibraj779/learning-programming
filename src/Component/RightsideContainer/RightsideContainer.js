import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RightsideContainer = () => {

    const toturialData = useLoaderData();

    // console.log(toturialData);
    return (
        <div>
            <h1>right side container </h1>
        </div>
    );
};

export default RightsideContainer;