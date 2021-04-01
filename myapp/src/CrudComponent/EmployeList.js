import React from 'react'

import { Badge, Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// import { Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react'

function EmployeList(props) {
    // let history = useHistory();

    const [data, setData] = useState([]);
    useEffect(() => {

        const GetData = async () => {

            const result = await axios('http://localhost:8001/doc');

            setData(result.data);
            console.log(result.data)

        };
        GetData();

    }, []);


    // useEffect(() => {
    //     loadUsers();
    // }, []);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8001/doc/");
        setData(result.data.reverse());
    };

    const deleteUser = async id => {

        await axios.delete(`http://localhost:8001/doc/${id}`);
        props.history.push('/EmployeList')
        loadUsers();
    };

    const editemployee = (id) => {

        props.history.push({
            pathname: '/edit/' + id
        });

        // loadUsers();
    };

    return (
        <div className="animated fadeIn">

            <Row>

                <Col>

                    <Card>

                        <CardHeader>

                            <i className="fa fa-align-justify"></i> Employee List

              </CardHeader>

                        <CardBody>

                            <Table hover bordered striped responsive size="sm">

                                <thead>

                                    <tr>

                                        <th>Name</th>

                                        <th>Department</th>

                                        <th>Age</th>

                                        <th>City</th>

                                        <th>Country</th>

                                        <th>Gender</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        data.map((item, idx) => {

                                            return <tr>

                                                <td>{item.Name}</td>

                                                <td>{item.Department}</td>

                                                <td>{item.Age}</td>

                                                <td>{item.City}</td>

                                                <td>{item.Country}</td>

                                                <td>

                                                    {item.Gender}

                                                </td>

                                                <td>

                                                    <div class="btn-group">

                                                        <button className="btn btn-warning" onClick={() => { editemployee(item.id) }}>Edit</button>

                                                        <button className="btn btn-warning" onClick={() => { deleteUser(item.id) }}>Delete</button>


                                                    </div>

                                                </td>

                                            </tr>

                                        })}

                                </tbody>

                            </Table>

                        </CardBody>

                    </Card>

                </Col>

            </Row>

        </div>

    )

}
export default EmployeList
