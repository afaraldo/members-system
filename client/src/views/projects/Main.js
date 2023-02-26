import React, { useEffect, useState } from 'react'
import ProjectList from '../../components/projects/ProjectList';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default () => {
    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [project, setProject] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects')
            .then(res=>{
                setProjects(res.data);
                setLoaded(true);
            });
    },[])

    const updateProject = (oldProject, newAttributes) => {
        axios.put('http://localhost:8000/api/projects/' + oldProject._id, {...oldProject, ...newAttributes})
            .then(res => {
                //setProject(projects.filter(project => project._id == newProject._id));
                //setProject(...project, {status: "pending"});
                //setProjects(...projects, project);
                axios.get('http://localhost:8000/api/projects')
                    .then(res=>{
                        setProjects(res.data);
                        setLoaded(true);
                    });
            });
    }

    const removeProject = projectId => {
        axios.delete('http://localhost:8000/api/projects/' + projectId)
            .then(res => {
                setProjects(projects.filter(project => project._id !== projectId));
            });
            navigate("/");
    }

    return (
        <>
            {loaded && <ProjectList
                projects={projects}
                removeFromDom={removeProject}
                updateFromDom={updateProject}
                />}
        </>
    )
}