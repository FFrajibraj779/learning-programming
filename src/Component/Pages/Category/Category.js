import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const AllData = useLoaderData();
    console.log(AllData);
   
    return (
        <div>
        {
            AllData.map(news =><NewsDetails
            key={news._id}
            news={news}
            ></NewsDetails>)
        }
        </div>
    );
};

export default Category;