import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default props => {
    const [product, setProduct] = useState({});
    let { productId } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + productId)
            .then(res => setProduct({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/products/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}

