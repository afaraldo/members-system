import { React, useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import axios from 'axios';

export default props => {
    const { person, debts, setDebts } = props;

    const updateFromDom = (debt, attributes) => {
        axios.put('http://localhost:8000/api/people/' + person._id + '/debts/' + debt._id, attributes, { withCredentials: true, credentials: 'include' })
            .then(res=>{
                setDebts(res.data);
            })
            .catch(res => {
                console.log(res)
            })
            ;
    }

    return (
        <>
            <div className="row mb-3">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    {debts.map((debt) => 
                        <div key={debt._id} className="card mb-3">
                            <div className="card-header text-bg-secondary">{debt._id}</div>
                            <div className="card-body">
                                <p>
                                    Precio: {debt.amount}
                                    <Badge bg="warning">Pendiente</Badge>
                                </p>
                                <button className="btn btn-primary"
                                        onClick={(e)=> {
                                                e.preventDefault();
                                                updateFromDom(debt, {status: 'paid'})}
                                            }>
                                    Pay
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

