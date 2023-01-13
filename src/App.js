import React from 'react';
import NavBar from './components/navBar.js';
import Project from './components/project.js';
import Contacts from './components/contacts.js';

import './App.css';

function App() {
  return (
    <div style = {{height: '100%', display: 'flex', flexDirection: 'column'}}>
      <header style = {{size: '30px',minWidth: '300px',padding: '0',}}className="App-header">
      <a style = {{textDecoration: 'none'}}href="index.html">
        <h1 style = {{margin: '0',fontFamily: "'Righteous', Arial, Helvetica, sans-serif",backgroundColor: '#0B0B4A',
        color: '#DC0128',fontWeight: 'bold',fontSize: '60px',textAlign: 'center'}}>Christian Gonzalez</h1>
      </a>
      <NavBar />
      </header>
      <Project />
    <Contacts />
    </div>
  );
}

export default App;
