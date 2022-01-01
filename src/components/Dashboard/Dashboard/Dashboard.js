import React, { useState } from 'react';
import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AdminPanel from '../AdminPanel/AdminPanel';
import DashboardHome from './DashboardHome';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const { logout, admin } = useAuth();
    let { path, url } = useRouteMatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Button variant="primary" onClick={handleShow}>
                        <i className="fas fa-bars"></i> Options
                    </Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="comp-title fs-1"> <img className='logo-img' src='' alt="" /><span className='title-style'>Hero</span>-Rider </Offcanvas.Title>
                        </Offcanvas.Header>
                        <hr />
                        <Offcanvas.Body className="text-center">
                            <Link as={NavLink}
                                className="link-item" to="/home">
                                <i className="fas fa-home"></i>
                                <span>Home</span>
                            </Link> <br />
                            <Link as={NavLink}
                                className="link-item" to={`${url}/profile`} >
                                <i className="fas fa-shopping-cart"></i>
                                My Profile</Link> <br />
                            {/* <Link as={NavLink}
                                className="link-item" to={`${url}/payment`} >
                                <i className="fas fa-money-check-alt"></i> Payment</Link> <br /> */}
                            <Link as={NavLink}
                                className="link-item" to='/services' >
                                <i className="fas fa-medal"></i>Services</Link> <br />
                            {admin && <div>
                                <hr />
                                <br />
                                <Link as={NavLink}
                                    className="link-item" to={`${path}/allUsers`}>
                                    <i className="fas fa-cart-arrow-down"></i> All Users</Link> <br />
                                <br />
                            </div>}

                            <hr />
                            <Button onClick={logout} variant="light">
                                <i className="fas fa-sign-out-alt"></i>  Logout
                            </Button>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Navbar.Brand className="w-75 mx-auto" href="#home">
                        Dashboard
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/profile`}  >
                    <DashboardHome></DashboardHome>
                </Route>
                {/* <Route path={`${path}/services`}>
                    <Services></Services>
                </Route> */}
                {/* <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route> */}
                <AdminRoute path={`${path}/allUsers`}>
                    <AdminPanel></AdminPanel>
                </AdminRoute>
            </Switch>
        </div>
    );
};

export default Dashboard;