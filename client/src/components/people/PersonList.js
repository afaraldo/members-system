import React from 'react'
import { Link } from "react-router-dom";

export default props => {
    const { people, removeFromDom, updateFromDom} = props;

    const formatDate = (date) => {
        const dateObject = new Date(date);
        const today = new Date()
        if (dateObject > today) {
            return <p>{dateObject.toLocaleDateString()}</p>
        } else {
            return <p className="text-danger">{dateObject.toLocaleDateString()}</p>
        }
    }

    return (
        <>
            <h1>person Manager</h1>
            <div className="row mb-3">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                    <div className="card-header text-bg-secondary">Backlog</div>
                        <div className="card-body">
                                {people.map((person) => 
                                    <div key={person._id} className="card mb-3">
                                        <div className="card-body">
                                            <h2>{person.firstName}</h2>
                                            <button className="btn btn-warning"
                                                    onClick={(e)=> updateFromDom(person, {status: 'pending'})}>
                                                Start person
                                            </button>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            
            <Link className="btn btn-primary" to={'/people/new'}>
                <i className="fa-solid fa-octagon-plus"></i>
                Add new person
            </Link>
        </>
    )
}

