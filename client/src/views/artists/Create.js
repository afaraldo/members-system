import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtistForm from '../../components/artists/ArtistForm';
import { redirect } from "react-router-dom";

export default props => {
    
    const createArtist = artist => {
        axios.post('http://localhost:8000/api/artists', artist)
            .then(res=>{
                console.log(res);
                redirect('/artists');
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <ArtistForm onSubmitProp={createArtist} initialName=""/>
        </div>
    )
}