import React from 'react';
import {projects} from '../data/projectsData.js';
import {useSelector,useDispatch } from 'react-redux';
import { selectContribution,changeProject } from '../features/contribution/contributionSlice.js';

export const nav = 
{
    marginTop: '0px',
    padding: '0px',
    marginBottom: '30px',
    fontWeight: 'bold',
    fontSize: '120%',
    textAlign: 'center',
}

export const navULWide = {
    listStyleType: 'none',
    paddingLeft: '0px',
    fontSize: '1.2em',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    margin: '15px',   
}

export const navUL = {
    listStyleType: 'none',
    paddingLeft: '0px',
    fontSize: '1.2em',
    margin: '10px',
}

export const navA = 
{
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily:"'Righteous', Arial, Helvetica, sans-serif",
    fontSize: '28px',
    color: '#DC0128',
    width: '100%'
}


// changeProject: (state, action) => {
//     state.currentProject = action.payload;
//     state.currentContribution = 0;
// },


export default function NavBar(){
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(changeProject(e.target.name));
    }
    return (
        <div>
            <nav style = {nav}>
                <ul style = {navULWide}>
                    {projects.map((project) => (
                    <li key = {project.key}>
                        <a onClick={handleClick} style = {navA} name = {project.key}>{project.title}</a>
                    </li>))}
                </ul>
            </nav>
        </div>
    );
}