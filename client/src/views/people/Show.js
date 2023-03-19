import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DebtList from '../../components/debts/DebtList';
import { useNavigate, useParams } from "react-router-dom";

export default () => {
    const [ person, setPerson ] = useState('')
    const [ debts, setDebts ] = useState([]);
    let { personId } = useParams();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people/' + personId)
            .then(response=>{
                let person =  response.data
                setPerson(person)
                setDebts(person.debts)
            });
    }, [])

    return(
        <DebtList person={person} debts={debts} setDebts={setDebts}/>
    )
}