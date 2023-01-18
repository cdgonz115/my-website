
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {incrementContribution, decrementContribution} from '../features/contribution/contributionSlice.js';

import {selectContribution, selectProject } from '../features/contribution/contributionSlice';

import {contributions} from '../data/projectsData';

import './contribution.css'

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