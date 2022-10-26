import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../Courses/CourseDetails';

const Category = () => {
    const AllDatas = useLoaderData();
    
   
    return (
        <div>
        {
            AllDatas.map(singleDatas =><CourseDetails key={singleDatas.id} singleData={singleDatas}></CourseDetails>)
        }
        </div>
    );
};

export default Category;