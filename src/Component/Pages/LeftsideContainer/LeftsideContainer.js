import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';



const LeftsideContainer = () => {
    
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
              <h1>category</h1>
              <div>
            <h4 className='mt-4'>All Category </h4>
            <div >
                {
                    categories.map(category => <p key={category.id}>
                     <Link to={`/category/${category.id}`}>{category.name}</Link>
              
                    </p>)
                }
            </div>

        </div>
       
        </div>
    );
};

export default LeftsideContainer;