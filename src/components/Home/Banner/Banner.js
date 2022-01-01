import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="mb-4">
                <div className="text-white Header-container text-center">
                    <Container fluid>
                        <Row>
                            <Col xs={12} md={12} className="mt-5 pt-5 text-center">
                                <h1 className="mt-5 pt-5 fw-bold text-white" >Pick
                                    <br />
                                    Your Best Ride <br />
                                    From Here
                                </h1>
                                <p>We provide you the best cars</p>
                                <Link to='/register'><Button className="px-4 py-2 bttn-regular" variant="danger">Register  <i class="fas fa-arrow-right"></i></Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Banner;