import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, FormControl, Row, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://pacific-mountain-24506.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    // Delete User
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://pacific-mountain-24506.herokuapp.com/${id}`, {
                    method: "DELETE",
                    headers: { "content-type": "application/json" }

                })
                    .then((res) => res.json())
                    .then((result) => {

                        if (result.deletedCount) {

                            Swal.fire(
                                'Cancelled!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    });

            }
        })
    }
    //Status Approve

    const handleApprove = (id) => {
        // console.log(id)
        fetch(`https://pacific-mountain-24506.herokuapp.com/approveOrder/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" }

        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
                if (result.modifiedCount) {
                    Swal.fire(
                        'Marked!',
                        'User status changed to marked!',
                        'success'
                    )
                    // alert("Order Status Approved!");
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'This user is already marked!'
                    })
                }
            });
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <h1 className='mt-4'>Registered User List {users.length}</h1>
                        <Form className="d-flex w-50 mx-auto my-4">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <div>
                            {
                                users.map(user => <Table className="w-75 mx-auto" key={user._id} responsive>
                                    <thead>
                                        <tr>
                                            <th>User Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone No</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                            <th>Cancel</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >{user._id} </td>
                                            <td >{user.displayName}  </td>
                                            <td >{user.email}  </td>
                                            <td >{user.age}  </td>
                                            <td >{user.address}  </td>
                                            <td >{user.phone}  </td>
                                            <td >{user.status}  </td>
                                            <td > <Button onClick={() => handleApprove(user._id)} variant="success">Mark</Button>  </td>
                                            <td > <Button onClick={() => handleDelete(user._id)} variant="danger">Block</Button>  </td>
                                        </tr>
                                    </tbody>
                                </Table>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default AdminPanel;