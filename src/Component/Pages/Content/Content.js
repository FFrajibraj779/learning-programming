import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Content = (props) => {

    const { img, title, price, id } = props.singleData;



    return (
        <div className='singleCart'>

            <Card className=''>
                <Card.Img variant="top" style={{ height: "250px" }} src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {
                            <p>price {price}</p>
                        }
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Button variant="outline-primary" ><Link to={`/category/${id}`} className='detailsBtn '>details</Link></Button>

                        <Link to={`/premium/${id}`} className='detailsBtn'><Button>premium</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Content;