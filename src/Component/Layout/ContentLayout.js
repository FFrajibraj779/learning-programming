import React, { createContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Content from '../Pages/Content/Content';
import LeftsideContainer from '../Pages/LeftsideContainer/LeftsideContainer';
import RightsideContainer from '../RightsideContainer/RightsideContainer';

export const contentContext = createContext();

const ContentLayout = () => {
    
   
    return (
        <div>
             
         <contentContext.Provider>
         <Container>
                <Row>
                    <Col lg="4">
                     <LeftsideContainer></LeftsideContainer>
                    </Col>
                    <Col>
                    <RightsideContainer></RightsideContainer>
                    </Col>
                </Row>
             </Container>
             <Content></Content>
         </contentContext.Provider>
            
        </div>
    );
};

export default ContentLayout;