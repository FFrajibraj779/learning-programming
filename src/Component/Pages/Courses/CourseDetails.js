import React from 'react';

const CourseDetails = ({singleData}) => {
    console.log(singleData);
    const{img, description, title, price} = singleData;
    return (
        <div>
            <div>
                 <h1>coursse details</h1>
            <h1>{title} </h1>
             <p>{description}</p>
            </div>

               
        </div>
    );
};

export default CourseDetails;