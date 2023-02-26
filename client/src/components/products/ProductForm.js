import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = e => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange para actualizar firstName y lastName
    return (
        <div className="col-3">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group mb-3">
                    <label className="form-label">Title</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setTitle(e.target.value)} value={title}/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Price</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setPrice(e.target.value)} value={price}/>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Description</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}