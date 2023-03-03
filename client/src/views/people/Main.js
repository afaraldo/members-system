import React, { useEffect, useState } from 'react'
import PersonList from '../../components/people/PersonList';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [person, setPerson] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[])

    const updateperson = (oldperson, newAttributes) => {
        axios.put('http://localhost:8000/api/people/' + oldperson._id, {...oldperson, ...newAttributes})
            .then(res => {
                //setPerson(people.filter(person => person._id == newperson._id));
                //setPerson(...person, {status: "pending"});
                //setPeople(...people, person);
                axios.get('http://localhost:8000/api/people')
                    .then(res=>{
                        setPeople(res.data);
                        setLoaded(true);
                    });
            });
    }

    const removeperson = personId => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                setPeople(people.filter(person => person._id !== personId));
            });
            navigate("/");
    }

    return (
        <>
            {loaded && <PersonList
                people={people}
                removeFromDom={removeperson}
                updateFromDom={updateperson}
                />}
        </>
    )
}