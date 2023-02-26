import React from 'react'
import axios from 'axios';
export default props => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return <p key={idx}>{person.lastName}, {person.firstName}</p>
            })}
        </div>
    )
}

