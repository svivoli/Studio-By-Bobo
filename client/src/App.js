import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Style from './pages/Style';
import Bio from './pages/Bio'
import Inquiries from './pages/Inquiries';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/style">
            <Style />
          </Route>
          <Route exact path="/bio">
            <Bio />
          </Route>
          <Route exact path="/inquiries">
            <Inquiries />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
