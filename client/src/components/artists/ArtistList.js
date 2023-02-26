import React from 'react'
import { Link } from "react-router-dom";

export default props => {
    const { artists, removeFromDom } = props;

    return (
        <>
            <h1>Favorite authors:</h1>
            <Link to={'new'}>
                Add new an Author
            </Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {artists.map((artist, idx)=>{
                        return <tr key={artist._id}>
                            <td>
                                <Link to={artist._id}>
                                    {artist.name}
                                </Link>
                            </td>
                            <td>
                                <Link className="btn btn-secondary" to={artist._id + '/edit'}>
                                    Editar
                                </Link>
                                <button className="btn btn-danger" onClick={(e)=>{removeFromDom(artist._id)}}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

