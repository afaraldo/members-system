import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import ArtistForm from '../../components/artists/ArtistForm';
import { redirect } from "react-router-dom";

export default props => {
    const { artistId } = useParams();
    const { artist, setArtist } = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/artists/' + artistId)
            .then(res => {
                console.log(res.data);
                
            });
        
    }, [])

    const updateArtist = artist => {
        axios.put('http://localhost:8000/api/artists/' + artistId, artist)
            .then(res => console.log(res));
    }

    return (
        <div>
            <ArtistForm onSubmitProp={updateArtist} initialName={artist}/>
        </div>
    )
}