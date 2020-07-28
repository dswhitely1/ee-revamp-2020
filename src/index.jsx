import LandingPage from 'layouts/LandingPage/landingPage.component';
import Providers from 'Providers/providers.component';
import React from 'react';
import { render } from 'react-dom';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => (
  <Providers>
    <Switch>
      <Route path="/home" component={LandingPage} />
      <Redirect from="/" to="/home" />
    </Switch>
  </Providers>
);

render(<App />, document.getElementById('root'));
