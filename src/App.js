import React from 'react';
import NavBar from './components/navBar.js';
import Project from './components/project.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <div style = {{minWidth: '280px',margin: 'auto'}}>
      <header style = {{size: '30px',minWidth: '300px',padding: '0',}}className="App-header">
      <a style = {{textDecoration: 'none'}}href="index.html">
        <h1 style = {{margin: '0',fontFamily: "'Righteous', Arial, Helvetica, sans-serif",backgroundColor: '#0B0B4A',
        color: '#DC0128',fontWeight: 'bold',fontSize: '60px',textAlign: 'center'}}>Christian Gonzalez</h1>
      </a>
      <NavBar />
      <Project />
      </header>
      </div>
    </div>
  );
}

export default App;
