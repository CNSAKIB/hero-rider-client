import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import service from '../../../images/logo.jpg'
import car from '../../../images/car-course.jpg'
import bike from '../../../images/bike-course.jpg'
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div>
            <h1 className="mt-4 comp-title fs-1"><u>Why Us?</u></h1>
            <Row xs={1} sm={1} md={3} className="w-75 mx-auto g-4">
                <Col>
                    <Card className="single-card">
                        <Card.Img className="img-container" variant="top" src={service} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold" >Best Ride with at a good price</Card.Title>
                            <Card.Text>
                                We believe on "Customer priority first" policy.We provie you the best service even in the pick times!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="single-card">
                        <Card.Img className="img-container" variant="top" src={car} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Driving-Trainig</Card.Title>
                            <Card.Text>
                                We provide you the best driving instructor,so that you can learn driving properly,even can make carrers!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="single-card">
                        <Card.Img className="img-container" variant="top" src={bike} />
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Bike Riding traning</Card.Title>
                            <Card.Text>
                                We provide you the best bike riding instructor,so that you can learn bike riding properly,even can make carrers!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;