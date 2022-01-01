import React, { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button, Spinner, Alert } from 'react-bootstrap';
import login from '../../images/register.jpg'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, resetPassword, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[feild] = value;
        setLoginData(newLoginData);
        // console.log(feild, value);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleResetPassword = e => {
        resetPassword(loginData.email);
        e.preventDefault();
    }
    return (
        <div>
            <Container className="mt-4">

                <Row>
                    <Col xs={12} sm={12} md={8}>
                        <h1 className="mb-3 comp-title" >Login</h1>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
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
                            <Button onClick={handleLoginSubmit} className="mx-3" type="submit" variant="primary">Login <i className="fas fa-sign-in-alt"></i></Button> <br />
                            <Button onClick={handleResetPassword} className="mx-3 mt-3" variant="primary">Forget Password?</Button>
                        </form>} <br />
                        {isLoading && <Spinner animation="grow" />}
                        {authError && <Alert variant='danger'>
                            {authError}
                        </Alert>}
                        <br />
                        <hr />
                        <br />
                        <Link to="/register" style={{ textDecoration: 'none' }} className="my-4 fw-bold">New User? Create an Account</Link>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <img className="w-100 mx-auto" src={login} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;