import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Content = (props) => {
    
    const{img, title, price} =props.singleData;
    
    

    return (
        <div className='singleCart'>
            
    <Card className=''>
      <Card.Img variant="top" style={{height:"250px"}} src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {
                <p>price {price}</p>
            }
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
        </div>
    
    );
};

export default Content;