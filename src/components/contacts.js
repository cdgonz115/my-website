import React from 'react';

const contactsFooterStyles = 
{
    padding: '2em',
    fontSize: '75%',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    backgroundColor: '#7a8fa7',
    flex: '1',
    maxHeight: '20%'
}

const contactsH3Styles = 
{
    textAlign: 'center',
    padding: '30px',
    fontSize: '1.3em',
    letterSpacing: '.1em',
    lineHeight: '2em',
    fontFamily: "'Comfortaa', Arial, Helvetica, sans-serif",
    fontWeight: 'bold',
}
const contactsDivStyles = {
    display: 'flex',
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    marginBottom: '50px'
}

const contactIconDivStyles = {
    borderRadius: '10px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const contactIconImgStyles = {
    maxWidth: '50px'
}

export default function Contacts(){

return (
        <div style = {contactsFooterStyles}>
            <h3 style = {contactsH3Styles}>
                Socials
            </h3>
            <div style = {contactsDivStyles}>
                <div style = {contactIconDivStyles}>
                    <a href="https://www.linkedin.com/in/christian-gonzalez-a297211b6" target="_blank">
                        <img style = {contactIconImgStyles} src="media/Contacts/linkedin.png"/>
                    </a>
                </div>
                <div style = {contactIconDivStyles}>
                    <a href="https://github.com/cdgonz115" target="_blank">
                        <img style = {contactIconImgStyles} src="media/Contacts/github.png"/>
                    </a>
                </div>
                <div style = {contactIconDivStyles}>
                    <a href="https://cg115.itch.io/" target="_blank">
                        <img style = {contactIconImgStyles} src="media/Contacts/itch-io.png"/>
                    </a>
                </div>
            </div>
            Copyright &copy; 2021 Christian Gonzalez
            <br/>
            <a href="mailto:christiandgonzalez115@gmail.com">Christian Gonzalez</a> &nbsp; 
        </div>

)
}