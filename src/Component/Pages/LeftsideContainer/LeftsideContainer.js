import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const LeftsideContainer = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-opal.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>

            <div>
                <h4 className='mt-4'>Course Category </h4>
                <hr className='hr' />
                <div >
                    {
                        categories.map(category => <p key={category.id}>
                            <Link className='category-link' to={`/category/${category.id}`}>
                                <h6 className='category-name' >{category.name}</h6>
                            </Link>

                        </p>)
                    }
                </div>

            </div>

        </div>
    );
};

export default LeftsideContainer;