import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from '../src/Pages/Index';
import Tree from "./Pages/Tree";
import MyContext from "./Pages/Context";

function App() {
  return (
      <BrowserRouter>
          <Route path="/" component={Index} exact></Route>
          <Route path='/Tree' component={Tree} exact></Route>
          <Route path="/context" component={MyContext}></Route>
      </BrowserRouter>
  );
}

export default App;
