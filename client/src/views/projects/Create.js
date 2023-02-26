import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectForm from '../../components/projects/ProjectForm';
import { useNavigate } from "react-router-dom";

export default props => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    
    const createProject = project => {
        axios.post('http://localhost:8000/api/projects', project)
            .then(res=>{
                console.log(res);
                navigate("/");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                console.log("hay errores");
                // Set Errors
                setErrors(errorArr);
            });
    }

    return (
        <div>
            <ProjectForm onSubmitProp={createProject} initialName="" errors={errors}/>
        </div>
    )
}