import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import './colors.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "*">
          <span>Page not found</span>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;
