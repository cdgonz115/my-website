import React from 'react';
import {useSelector} from 'react-redux';
import Contribution from './contribution.js';
import ProjectDescription from './projectDescription.js';
import Spotlight from './spotlight.js';
import {selectProject} from '../features/contribution/contributionSlice';
import './project.css'

export default function Project(){

    const project = useSelector(selectProject);

    if(project){
        return (
            <div>
                <ProjectDescription  />
                <Contribution  />
            </div>
        );
    }
    else {      
        return (
            <div>
                <div className='introduction'>
                <h2>
                    About Me 
                </h2>
                <p>
                Welcome to my portfolio page! My name is Christian Gonzalez, I am a recent graduate from Arizona State University with a major in Computer Science 
                and a certificate in computer games . This is a website dedicated to showcase my contributions to various projects during my time in college. 
                Over the course of my time at ASU, I have worked on projects for club, classes, game jams, and personal intrigue. I have worked on dozens of mechanics and systems, 
                I especially enjoy working on features related to movement and graphics that allow me to use math or physics(either simulating or breaking them) to achieve the most 
                satisfying results. I have also developed the skills that allowed me to create programs such as a network application to store information in an O-ring,
                a Vigenere cypher solver where the lenght of the key is not known, or using react and redux to create well organized modern looking websites. My goal is to use my skills and 
                knowlege to bring value to a group of dedicated individuals that will help me to continue to grow and learn the skills necessary to continue thriving in the future. 
                And I believe that my experience in college not only has given much insight on working on large team projects, but it has also put me on the path towards fulfilling my goals.</p>
                </div>
                <Spotlight />
            </div>


        );
    }
}