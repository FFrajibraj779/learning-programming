import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../Courses/CourseDetails';

const Category = () => {
    const AllData = useLoaderData();
    
   
    return (
        <div>
        {
            AllData.map(singleData =><CourseDetails key={singleData.id} singleData={singleData}></CourseDetails>)
        }
        </div>
    );
};

export default Category;