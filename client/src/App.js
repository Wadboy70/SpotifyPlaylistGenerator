import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './views/Home/Home';
import Dashboard from './views/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';


import './App.css';
import './colors.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Switch>
        <Route 
          exact path = "/" 
          render = {() => user ? (<Redirect to = '/dashboard'/>) : (<Home/>)}/>
        <Route 
          exact path = '/dashboard' 
          render = {() => (<Dashboard user = {user}/>) }/>
        <Route path = "*">
          <span>Page not found</span>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;
