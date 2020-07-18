import React from 'react';
import { render } from 'react-dom';
import 'index.scss';
import Providers from 'Providers/providers.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from 'layouts/LandingPage/landingPage.component';

const App = () => (
  <Providers>
    <Switch>
      <Route path="/home" component={LandingPage} />
      <Redirect from="/" to="/home" />
    </Switch>
  </Providers>
);

render(<App />, document.getElementById('root'));
