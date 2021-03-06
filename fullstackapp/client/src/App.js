import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Register from "./components/Register";
import Footer from './components/Footer';
import NoMatch from "./components/NoMatch";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './css/app.css';

const App = () => {
  return (
    <React.Fragment>
        <NavBar />
        <div id="main-content">
          <Router>
            <Switch>
              <Route exact path='/register' render = { props => <Register { ...props } />} />
              <Route exact path='/signin' render = { props => <SignIn { ...props } />} />
              <Route exact path='/' render = { props => <Main { ...props } />} />
              <Route path="*" render={ props => <NoMatch { ...props } />} />
            </Switch>
          </Router>
        </div>
        <Footer />
    </React.Fragment>
  );
}

export default App;
