
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementContribution, decrementContribution} from '../features/contribution/contributionSlice.js';

import {selectContribution, selectProject } from '../features/contribution/contributionSlice';

import {contributions} from '../data/projectsData';

import './contribution.css'

const buttonStyles = {
    textDecoration: 'none',
    fontFamily:"'Righteous', Arial, Helvetica, sans-serif",
    fontSize: '46px',
    color: '#DC0128',
    border: 'none',
    backgroundColor: 'transparent'
}
const divContribution = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}
const contributionA = {
    textDecoration: 'none'
}
const contributionH2 = {
    marginTop: '40px',
    color: '#DC0128',
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: "'Comfortaa', Arial, Helvetica, sans-serif",
    alignContent: 'center'
}
const contributionH3 = {
    textAlign: 'center',
    color: 'black',
    fontFamily: "'Comfortaa', Arial, Helvetica, sans-serif",
    fontSize: '20px',
    letterSpacing: '.1em',
    lineHeight: '2em'
}

export default function Contribution(){

    const currentContributionIndex  = useSelector(selectContribution);
    const project = useSelector(selectProject);

    const {title,link, description, media} = contributions[project][currentContributionIndex];

    const dispatch = useDispatch();

    const canGoFurther = !(currentContributionIndex < contributions[project].length -1);
    const canGoBack = (currentContributionIndex === 0);

    return (
        <div className='contributionWrapper'>
        <a className='contributionWrapper' href = {link} target="_blank">
            <h2 >
                {title}
            </h2>
        </a>
        <h3 >
            {description}
        </h3 >
        <div className='contribution'>
            <button onClick={() => dispatch(decrementContribution())} disabled = {canGoBack}  >Prev</button>
            {(media!== undefined) && 
                    <video src = {media} width="1280" height="720" controls muted autoPlay loop/>
                    }
            <button onClick={() => dispatch(incrementContribution())} disabled = {canGoFurther} >Next</button>
        </div>
    </div>
    );
}