import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

import LinkState from './context/link/LinkState';

import './App.css';

const App = () => {
  return (
    <LinkState>
      <Router>
        <Fragment>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>

            </Switch>
          </div>
        </Fragment>
      </Router>
    </LinkState>
    
  );
}


export default App;
