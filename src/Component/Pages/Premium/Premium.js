import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PreInfo from '../PreInfo/PreInfo';

const Premium = () => {
    const predata = useLoaderData()
    console.log(predata);
    return (
        <div>

            <div className='premium-content'>
                {
                    predata.map(singleDatas => <PreInfo key={singleDatas.id} singleData={singleDatas}></PreInfo>)
                }
            </div>
        </div>
    );
};

export default Premium;