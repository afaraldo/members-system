import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export default props => {
    const { people, removeFromDom, updateFromDom} = props;
    const navigate = useNavigate();

    const createDebts = (personId) => {
        axios.post('http://localhost:8000/api/people/' + personId + '/debts', { withCredentials: true, credentials: 'include' })
            .then(res=>{
                console.log(res);
                navigate("/");
            })
            .catch(err=>{
                console.log(err)
        });
    }

    return (
        <>
            <h1>Clients</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) => 
                        <tr key={person._id}>
                            <td>
                                <Link to={"/people/" + person._id}>
                                    {person.firstName}
                                </Link>
                            </td>
                            <td>
                                {person.lastName}
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Link className="btn btn-primary" to={'/people/new'}>
                <i className="fa-solid fa-octagon-plus"></i>
                Add new person
            </Link>
        </>
    )
}

