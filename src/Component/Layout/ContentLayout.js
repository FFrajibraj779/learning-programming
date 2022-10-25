import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Content from '../Pages/Content/Content';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';
import LeftsideContainer from '../Pages/LeftsideContainer/LeftsideContainer';
import RightsideContainer from '../RightsideContainer/RightsideContainer';

const ContentLayout = () => {
    return (
        <div>
             
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
            
        </div>
    );
};

export default ContentLayout;