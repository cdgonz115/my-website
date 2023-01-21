import React from 'react';
import NavBar from './components/navBar.js';
import Project from './components/project.js';
import Contacts from './components/contacts.js';

import './App.css';

function App() {
  return (
    <div className='appWrapper '>
      <header>
      <a href="index.html">
        <h1>Christian Gonzalez</h1>
      </a>
      <NavBar />
      </header>
      <Project />
      <Contacts />
    </div>
  );
}

export default App;
