import React from 'react';
import { Button } from 'react-bootstrap';

const PreInfo = (props) => {
  
    const{title} = props.singleData;
    return (
        <div className='d-lg-flex justify-content-center align-items-center justify-content-around preInfo '>
            
            <div>
            <h1>{title}</h1>
            </div>
            <div>
            <button className='checkBtn'>CheckOut</button>
            </div>
        </div>
    );
};

export default PreInfo;