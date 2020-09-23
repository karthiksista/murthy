import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Header from './Components/Header';
import MainWrapper from './Components/MainWrapper';
import Nav from './Components/Nav';
import VideosPage from './VideosPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/videos" component={VideosPage} />
        </Switch>
      </div>
    </Router>
  );
}
