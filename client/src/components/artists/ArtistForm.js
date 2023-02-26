import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default (props) => {
    // mantener el control de lo que se escribe a través del gancho useState
    const { initialName, onSubmitProp } = props;

    const [name, setName] = useState(initialName); 

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }

    //onChange para actualizar firstName y lastName
    return (
        <>
            <h1>Favorite authors:</h1>
            <Link to={'/artists'}>
                Home
            </Link>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group mb-3">
                    <label className="form-label">Artist Name</label><br/>
                    <input className="form-control"
                        type="text"
                        name="name"
                        onChange = {(e)=>setName(e.target.value)}
                        value={name}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}
