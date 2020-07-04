import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
          <Sidebar />
          <Forecast />
      </body>
    </div>
  );
}

export default App;
