import logo from '../../logo.png';
import React from 'react';


export function activeRender() {
  console.log('Learn react')
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
    </a>
    </div>
  )
}