import React, { useState } from 'react';
import { Alert, Button, Col, Container, FloatingLabel, Form, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import register from '../../images/register.jpg'
const LearnerRegister = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, authError } = useAuth();
    const role = 'Learner'
    const status = 'unmarked'
    const history = useHistory();
    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        setLoginData(newLoginData);
        // console.log(feild, value);
    }
    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            // alert("Oops!Your Password Didn't Matched");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password did not matched!'
            })
        }
        else {
            registerUser(loginData.email, loginData.password, loginData.name, loginData.age, loginData.address, loginData.phone, loginData.nid, loginData.displayPicture, loginData.vehichleType, role, status, history);
            // console.log(loginData.name);
        }
    }
    return (
        <div>
            <Container className="mt-4">
                <Row>
                    <Col xs={12} sm={12} md={8}>
                        <h1 className="mb-3 comp-title" >Register Now as a Driving Lesson Learner!</h1>
                        {!isLoading && <form onSubmit={handleRegisterSubmit} >
                            <h2 className="mb-4"> <u>Personal Information</u> </h2>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Full Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    placeholder="Full Name" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Age"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="age"
                                    onBlur={handleOnBlur}
                                    placeholder="age" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Address"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="address"
                                    onBlur={handleOnBlur}
                                    placeholder="address" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Phone"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    onBlur={handleOnBlur}
                                    placeholder="phone" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Link of NID Card photo"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="nid"
                                    onBlur={handleOnBlur}
                                    placeholder="nid" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Link of Profile Photo"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="displayPicture"
                                    onBlur={handleOnBlur}
                                    placeholder="displayPicture" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder="Password" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="ReType Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    placeholder="ReType Password" />
                            </FloatingLabel>
                            <h5>Vehichle Type</h5>
                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Vehichle Type(Car/Bike)"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="vehichleType"
                                    onBlur={handleOnBlur}
                                    placeholder="vehichle type" />
                            </FloatingLabel>
                            <br />
                            <Button type="submit" variant="primary">Register <i className="fas fa-sign-in-alt"></i></Button> <br />
                        </form>}  <br />
                        {isLoading && <Spinner animation="grow" />}
                        {authError && <Alert variant='danger'>
                            {authError}
                        </Alert>}
                        <hr />
                        <Link to='/riderRegister' ><p>Want to join as a Hero-Rider?</p></Link>
                        <Link to='/login' ><p>Already have an account?</p></Link>
                        <br />
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <img className="w-100 mx-auto" src={register} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LearnerRegister;
