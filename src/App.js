import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './component/ToDoInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoInput/>
      </header>
    </div>
  );
}

export default App;
