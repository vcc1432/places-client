import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Auth from './user/pages/Auth';

const App = () => {
  return(
    <Router>
      <MainNavigation/>
      <main>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route> 
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:pid" exact>
          <UpdatePlace />
        </Route> 
        <Route path="/:uid/places" exact>
          <UserPlaces />
        </Route> 
        <Route path="/auth" exact>
          <Auth />
        </Route> 
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
};

export default App;
