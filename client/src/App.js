import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './Comp/Home';
import User from './Comp/User';
import NoMatch from './Comp/NoMatch';
import NavBar from './Comp/NavBar';
import UserProfile from './Comp/UserProfile';


import './App.css';
import { Container } from 'react-bootstrap';

const App = () => (
  <Fragment>
    <NavBar />
    <br />
    <Container>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/userprofile" component={UserProfile}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
