import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import DrawingsHome from './pages/DrawingsHome';
import DrawingsGallery from './pages/DrawingsGallery';
import DrawingsStyle from './pages/DrawingsStyle';
import Bio from './pages/Bio'
import Inquiries from './pages/Inquiries';
import PaintingsHome from './pages/PaintingsHome';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/drawingshome">
            <DrawingsHome />
          </Route>
          <Route exact path="/drawingsgallery">
            <DrawingsGallery />
          </Route>
          <Route exact path="/drawingsstyle">
            <DrawingsStyle />
          </Route>
          <Route exact path="/drawingsbio">
            <Bio />
          </Route>
          <Route exact path="/drawingsinquiries">
            <Inquiries />
          </Route>
          <Route exact path="/paintingshome">
            <PaintingsHome />
          </Route>
          <Route exact path="/paintingsgallery">
            
          </Route>
          <Route exact path="/paintingsstyle">
            
          </Route>
          <Route exact path="/paintingsbio">
            <Bio />
          </Route>
          <Route exact path="/paintingsinquiries">
            <Inquiries />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
