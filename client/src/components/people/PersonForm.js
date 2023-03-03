import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate} from "react-router-dom";

export default (props) => {
    const navigate = useNavigate();
    // mantener el control de lo que se escribe a través del gancho useState
    const { initialFirstName, initialLastName, initialDocument, initalPhoneNumber } = props;
    const { onSubmitProp, errors } = props;
    

    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [document, setDocument] = useState(initialDocument);
    const [phoneNumber, setPhoneNumber] = useState(initalPhoneNumber);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName, lastName, document, phoneNumber});
    }

    //onChange para actualizar firstName y lastName
    return (
        <>
            <h1>Gestion de Miembros</h1>
            <Link className="text-rigth" to={'/'}>
                Volver al Dashboard
            </Link>
            <form onSubmit={onSubmitHandler}>
                <fieldset className='fieldset'>
                    <legend>Crear nuevo socio</legend>
                    <ul>
                        { errors.map((err, index) => <li key={index} className="text-danger">
                            {err}
                        </li> )}
                    </ul>
                    <div className="form-group mb-3">
                        <label className="form-label">Nombre</label><br/>
                        <input className="form-control"
                            type="text"
                            name="name"
                            onChange = {(e)=>setFirstName(e.target.value)}
                            value={firstName}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Apellido</label><br/>
                        <input className="form-control"
                            type="text"
                            name="lastName"
                            onChange = {(e)=>setLastName(e.target.value)}
                            value={lastName}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Documento</label><br/>
                        <input className="form-control"
                            type="text"
                            name="document"
                            onChange = {(e)=>setDocument(e.target.value)}
                            value={document}/>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">Telefono</label><br/>
                        <input className="form-control"
                            type="text"
                            name="phoneNumber"
                            onChange = {(e)=>setPhoneNumber(e.target.value)}
                            value={phoneNumber}/>
                    </div>
                </fieldset>
                
                <button type="submit" className="btn btn-primary btn-block">Crear socio</button>
                
            </form>
        </>
    );
}
