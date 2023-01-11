
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementContribution, decrementContribution} from '../features/contribution/contributionSlice.js';

import {selectContribution, selectProject } from '../features/contribution/contributionSlice';

import {contributions} from '../data/projectsData';

// const buttonDivStyles =  {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }
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

//make a function that gets the number of contributions of the current project

export default function Contribution(){

    const currentContributionIndex  = useSelector(selectContribution);
    const project = useSelector(selectProject);

    const {title,link, description, media} = contributions[project][currentContributionIndex];

    const dispatch = useDispatch();

    const canGoFurther = !(currentContributionIndex < contributions[project].length -1);
    const canGoBack = (currentContributionIndex === 0);

    // call helper function 
    console.log('render');
    return (
        <div>
        <a style = {contributionA} href = {link} target="_blank">
            <h2 style = {contributionH2}>
                {title}
            </h2>
        </a>
        <h3 style = {contributionH3}>
            {description}
        </h3 >
        <div style = {divContribution}>
            <button onClick={() => {
                console.log("DecreaseClicked");
                dispatch(decrementContribution());
                console.log("AfterDecreaseDispatch");
                console.log(media);
            }} disabled = {canGoBack}  style = {buttonStyles}>Prev</button>
            {(media!== undefined)&& 
                    <video src = {media} width="1280" height="720" controls muted autoPlay loop/>
                    }
            <button onClick={() => {
                console.log('increaseClicked');
                dispatch(incrementContribution());
                console.log("AfterIncreaseDispatch");
                console.log(media);
            }} disabled = {canGoFurther} style = {buttonStyles}>Next</button>
        </div>
    </div>
    );
}