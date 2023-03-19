import { React, useState, useEffect } from 'react'
import Badge from 'react-bootstrap/Badge'
import axios from 'axios';

export default props => {
    const { person, debts, setDebts } = props;

    const updateFromDom = (debt, attributes) => {
        axios.put('http://localhost:8000/api/people/' + person._id + '/debts/' + debt._id, attributes, { withCredentials: true, credentials: 'include' })
            .then(res=>{
                setDebts(res.data.debts);
            })
            .catch(res => {
                console.log(res)
            })
            ;
    }

    const buttonPay = (debt) => {
        if (debt.state != 'paid') {
            return <button className="btn btn-primary"
                onClick={(e)=> {
                        e.preventDefault();
                        updateFromDom(debt, {state: 'paid'})}
                    }>
                Pay
            </button>
        }
    }

    return (
        <>
            <div className="row mb-3">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    {debts.map((debt) => 
                        <div key={debt._id} className="card mb-3">
                            <div className="card-header text-bg-secondary">{debt.title}</div>
                            <div className="card-body">
                                <p>
                                    Precio: {debt.amount}
                                    <Badge bg={debt.state == 'paid' ? 'success' : 'warning'}>
                                        {debt.state}
                                    </Badge>
                                </p>
                                {buttonPay(debt)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

