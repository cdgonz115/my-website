import React from 'react';
import {useSelector} from 'react-redux';
import {selectProject } from '../features/contribution/contributionSlice';
import {descriptions } from '../data/projectsData';
import './projectDescription.css'

export default function ProjectDescription(){

    const project = useSelector(selectProject);

    const {title, link, projectSummary, media} = descriptions[project];

    return (
        <div>
             <div className='projectSummary'>
                <h2>
                    {title}
                </h2>
                <p>
                    {projectSummary}
                </p>
            </div>
            {link!==undefined && (
                <div className='projectLink'>
                <a href = {link} target="_blank">
                    <h2 >Download Here</h2>
                </a>
                <img src = {media} />
            </div>)}
        </div>
    );
}