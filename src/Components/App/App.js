import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FullScreen from '../FullScreen/FullScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/:property' >
            <FullScreen />
          </Route>
          <Route path='/'>
            <FullScreen />
            <h1>main</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
