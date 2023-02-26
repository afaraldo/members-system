import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar firstName y lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange = {(e)=>setLastName(e.target.value)} value={lastName}/>
            </p>
            <input type="submit"/>
        </form>
    )
}