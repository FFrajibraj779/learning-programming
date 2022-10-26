import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../Courses/CourseDetails';

const Tutorial = () => {
    const AllData = useLoaderData();
    console.log(AllData);
    

    return (
        <div className='tutorial-content'>
           {
            AllData.map(singleData =><CourseDetails key={singleData.id} singleData={singleData}></CourseDetails>)
           }
        </div>
    );
};

export default Tutorial;