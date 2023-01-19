import React from 'react';
import {useDispatch } from 'react-redux';
import {projects} from '../data/projectsData.js';
import {changeProject} from '../features/contribution/contributionSlice.js';

import './navBar.css';

export default function NavBar(){
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(changeProject(e.target.name));
    }
    return (
        <div className='navBarWrapper'>
            <nav >
                <ul >
                    {projects.map((project) => (
                    <li key = {project.key}>
                        <a onClick={handleClick} name = {project.key}>{project.title}</a>
                    </li>))}
                </ul>
            </nav>
        </div>
    );
}