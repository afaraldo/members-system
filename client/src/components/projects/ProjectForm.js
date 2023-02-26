import React, { useState } from 'react';
import { Link, useNavigate} from "react-router-dom";

export default (props) => {
    const navigate = useNavigate();
    // mantener el control de lo que se escribe a través del gancho useState
    const { initialName, onSubmitProp, errors } = props;
    

    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState('');
    

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name, dueDate});
    }

    //onChange para actualizar firstName y lastName
    return (
        <>
            <h1>Project Manager</h1>
            <Link className="text-rigth" to={'/'}>
                Back to Dashboard
            </Link>
            <form onSubmit={onSubmitHandler}>
                <fieldset className='fieldset'>
                    <legend >Plan a new project</legend>
                    <ul>
                        { errors.map((err, index) => <li key={index} className="text-danger">
                            {err}
                        </li> )}
                    </ul>
                    <div className="form-group mb-3">
                        <label className="form-label">Name</label><br/>
                        <input className="form-control"
                            type="text"
                            name="name"
                            onChange = {(e)=>setName(e.target.value)}
                            value={name}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Due Date</label><br/>
                        <input className="form-control"
                            type="date"
                            name="dueDate"
                            onChange = {(e)=>setDueDate(e.target.value)}
                            value={dueDate}/>
                    </div>
                </fieldset>
                
                <button type="submit" className="btn btn-primary btn-block">Plan project</button>
                
            </form>
        </>
    );
}
