import React from 'react';
import {useSelector} from 'react-redux';
import {selectProject } from '../features/contribution/contributionSlice';
import {descriptions } from '../data/projectsData';

const projectSummaryH2Style = {
    marginTop: '40px',
    color: '#DC0128',
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: "'Comfortaa', Arial, Helvetica, sans-serif"
}

const projectSummaryPStyle = {
    textAlign: 'center',
    padding: '30px',
    fontSize: '1.3em',
    letterSpacing: '.1em',
    lineHeight: '2em',
    fontFamily: "'Comfortaa', Arial, Helvetica, sans-serif",
    fontWeight: 'bold'
}

const projectLinkDivStyle = {
    display: 'flex',
    flexDirection: 'column'
}
const projectLinkH2Style = {
    marginTop: '40px',
    color: '#DC0128',
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: "'Comfortaa', Arial, Helvetica, sans-serif"
}
const projectLinkImgStyle = {
    width: '80%',
    borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
}
const projectLinkAStyle = {textDecoration: 'none'}

export default function ProjectDescription(){

    const project = useSelector(selectProject);

    const {title, link, projectSummary, media} = descriptions[project];

    return (
        <div>
             <div >
                <h2 style = {projectSummaryH2Style}>
                    {title}
                </h2>
                <p style = {projectSummaryPStyle}>
                    {projectSummary}
                </p>
            </div>
            <div style = {projectLinkDivStyle}>
                <a style = {projectLinkAStyle}href = {link} target="_blank">
                    <h2 style = {projectLinkH2Style}>Download Here</h2>
                </a>
                <img style = {projectLinkImgStyle} src = {media} />
            </div>
        </div>
    );
}