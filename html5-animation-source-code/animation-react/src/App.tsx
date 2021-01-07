import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from '../src/Pages/Index';
import Layout from "./Pages/Layout";
import Tree from "./Pages/Tree";

function App() {
  return (
      <BrowserRouter>
          <Route path="/" component={Index} exact></Route>
          <Route path='/Layout' component={Layout} exact></Route>
          <Route path='/Tree' component={Tree} exact></Route>
      </BrowserRouter>
  );
}

export default App;
