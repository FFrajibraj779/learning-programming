import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { AuthContext } from '../../UserContext/UserContext';
import {useContext} from 'react'


const PreInfo = (props) => {
  const{userInfo} = useContext(AuthContext)
    const{title, img} = props.singleData;
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
            <button className='checkBtn'>Check Out</button>
        </div>
      </div>
 


 
    );
};

export default PreInfo;