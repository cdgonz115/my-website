import React from 'react';
import {useDispatch } from 'react-redux';
import {descriptions, projects} from '../data/projectsData';
import {changeProject} from '../features/contribution/contributionSlice.js';

import './spotlight.css';

export default function Spotlight() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        console.log(e.target);
        dispatch(changeProject(e.target.name));
    }
    

    return (
        <div className = 'spotlight'>
            {projects.map((project) => (
                <div key = {project.key} className = 'item'>
                    <div className = "title">{project.title}</div>
                    <a >
                    <img onClick={handleClick} src = {descriptions[project.key].media} alt = {project.title} name={project.key}/>
                    </a> 
                </div>
            ))}
        </div>
    );
}