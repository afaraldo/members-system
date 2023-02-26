import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, userParams } from "react-router-dom";
export default props => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    let { productId } = useParams();
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + productId)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + productId, {
            title,
            price
        })
            .then(res => console.log(res));
    }
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Last Name</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}