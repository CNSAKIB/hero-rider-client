import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import carcourse from '../../../images/car-course.jpg'
import bikecourse from '../../../images/bike-course.jpg'
const Services = () => {
    return (
        <div>
            <Container className='my-5'>
                <h1 className='mb-4'>We Offer these Services</h1>
                <Row className='g-4' >
                    <Col xs={12} sm={12} md={6}>
                        <Card>
                            <Card.Header>Package-1</Card.Header>
                            <Card.Img variant="top" src={carcourse} />
                            <Card.Body>
                                <Card.Title>Learn Car Driving</Card.Title>
                                <Card.Text>
                                    <p>Price:$200</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <Card>
                            <Card.Header>Package-2</Card.Header>
                            <Card.Img variant="top" src={bikecourse} />
                            <Card.Body>
                                <Card.Title>Learn Bike Riding</Card.Title>
                                <Card.Text>
                                    <p>Price:$100</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;