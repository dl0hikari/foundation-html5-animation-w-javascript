import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Index from '../src/Pages/Index';

function App() {
  return (
      <BrowserRouter>
        <Route path="/" component={Index} exact></Route>
      </BrowserRouter>
  );
}

export default App;
