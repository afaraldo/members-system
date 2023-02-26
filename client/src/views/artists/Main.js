import React, { useEffect, useState } from 'react'
import ArtistList from '../../components/artists/ArtistList';
import axios from 'axios';
import { redirect } from "react-router-dom";

export default () => {
    const [artists, setArtists] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/artists')
            .then(res=>{
                setArtists(res.data);
                setLoaded(true);
            });
    },[])

    const removeArtist = artistId => {
        axios.delete('http://localhost:8000/api/artists/' + artistId)
            .then(res => {
                setArtists(artists.filter(artist => artist._id !== artistId));
            });
            redirect('/artists');
    }

    return (
        <>
            {loaded && <ArtistList artists={artists} removeFromDom={removeArtist}/>}
        </>
    )
}