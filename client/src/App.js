import React from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import './colors.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {withRouter(Home)}/>
        <Route path = "*" component = {withRouter(notFound)}/>
      </Switch>
      <Footer/>
    </Router>
  );
}
const notFound = () =>{
  return(
    <span>Page not found</span>
  )
}
export default App;
