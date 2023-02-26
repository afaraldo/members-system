import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <>
            <h1>All Products:</h1>
            <ul>
                {props.products.map((product, idx)=>{
                    return <li key={product._id}>
                        <Link to={product._id}>
                            {product.title}, {product.price}, {product.description}
                        </Link>
                        |
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                    </li>
                })}
            </ul>
        </>
    )
}

