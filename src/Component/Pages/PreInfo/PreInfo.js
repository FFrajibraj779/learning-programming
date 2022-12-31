import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../UserContext/UserContext';
import {useContext} from 'react'
import { Link } from 'react-router-dom';


const PreInfo = ({singleData}) => {
  const{userInfo} = useContext(AuthContext)
    const{title, img, id, tutorial_id} = singleData;
    console.log(singleData);
    return (
       
           
      <div className='preCard border'>
        <div className=''>
            <Image className='preimg' src={img}></Image>
             <h5>{title}</h5>
        </div>
        <div>
           <div>
           {
                userInfo?.displayName ? 
                <h6>{userInfo?.displayName }</h6>
                :undefined
             }
           </div>
           <div>
            {
                userInfo?.email ? userInfo?.email : undefined
            }
           </div>
        </div>
        <div>
          <Link to={`/checkout/${tutorial_id}`}>   <button className='checkBtn'>Check Out</button></Link>
        </div>
      </div>
 


 
    );
};

export default PreInfo;