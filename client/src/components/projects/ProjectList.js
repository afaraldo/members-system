import React from 'react'
import { Link } from "react-router-dom";

export default props => {
    const { projects, removeFromDom, updateFromDom} = props;

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
            <h1>Project Manager</h1>
            <div className="row mb-3">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                    <div className="card-header text-bg-secondary">Backlog</div>
                        <div className="card-body">
                                {projects.filter((project) => project.status == 'new').map((project) => 
                                    <div key={project._id} className="card mb-3">
                                        <div className="card-body">
                                            <h2>{project.name}</h2>
                                            { formatDate(project.dueDate)}
                                            <button className="btn btn-warning"
                                                    onClick={(e)=> updateFromDom(project, {status: 'pending'})}>
                                                Start Project
                                            </button>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-header text-bg-primary">In Progress</div>
                        <div className="card-body">
                            {projects.filter((project) => project.status == 'pending').map((project) => 
                                <div key={project._id} className="card mb-3">
                                    <div className="card-body">
                                        <h2>{project.name}</h2>
                                        { formatDate(project.dueDate)}
                                        <button className="btn btn-success"
                                                onClick={(e)=> updateFromDom(project, {status: 'completed'})}>
                                            Move to completed
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                    <div className="card-header text-bg-success">Completed</div>
                    <div className="card-body">
                        {projects.filter((project) => project.status == 'completed').map((project) =>
                            <div key={project._id} className="card mb-3">
                                <div className="card-body">
                                    <h2>{project.name}</h2>
                                    { formatDate(project.dueDate)}
                                    <button className="btn btn-danger" onClick={(e)=>{removeFromDom(project._id)}}>
                                        Remove Project
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            </div>
            
            <Link className="btn btn-primary" to={'/projects/new'}>
                <i className="fa-solid fa-octagon-plus"></i>
                Add new Project
            </Link>
        </>
    )
}

