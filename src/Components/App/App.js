import React from 'react';
import Menu from '../Menu/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/:property'>
            <Menu />
          </Route>
          <Route path='/'>
            <Menu />
            <h1>main</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
