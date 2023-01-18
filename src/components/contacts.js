import React from 'react';

import './contacts.css';

export default function Contacts(){

return (
        <div className = 'contactsFooter'>
            <h3>
                Socials
            </h3>
            <div className = 'contacts'>
                <div className = 'contactsIcon'>
                    <a href="https://www.linkedin.com/in/christian-gonzalez-a297211b6" target="_blank">
                        <img  src="media/Contacts/linkedin.png" alt = 'linkedIn' />
                    </a>
                </div>
                <div className = 'contactsIcon'>
                    <a href="https://github.com/cdgonz115" target="_blank">
                        <img  src="media/Contacts/github.png" alt = 'github'/>
                    </a>
                </div>
                <div className = 'contactsIcon'>
                    <a href="https://cg115.itch.io/" target="_blank">
                        <img src="media/Contacts/itch-io.png" alt = 'itch-io'/>
                    </a>
                </div>
            </div>
            Copyright &copy; 2023 Christian Gonzalez
            <br/>
            <a href="mailto:christiandgonzalez115@gmail.com">Christian Gonzalez</a> &nbsp; 
        </div>

)
}