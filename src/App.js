import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInput from './component/ToDoInput';
import ToDoList from './component/ToDoList';
import { HashRouter, Route } from "react-router-dom"
import FinishedItem from './component/FinishedItem';
import HomePage from './component/HomePage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <ToDoInput/>
        <ToDoList/> */}
        {/* <Route exact path="/" component={ToDoInput, ToDoList}/> */}
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/finished" component={FinishedItem}/>
      </HashRouter>
    </div>
  );
}

export default App;
