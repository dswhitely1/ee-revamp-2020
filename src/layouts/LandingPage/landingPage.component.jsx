import React, { createRef } from 'react';
import './landingPage.styles.scss';
import LandingPageNavBar from 'components/NavBars/LandingPage/landingPageNavBar.component';
import Footer from 'components/Footer/footer.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPageHome from 'views/landingPage.component';
import header from 'assets/header.jpg';

function LandingPage({ ...rest }) {
  return (
    <div>
      <LandingPageNavBar color="primary" {...rest} />
      <div className="landing-page-wrapper">
        <div className="landing-page-full-width">
          <Switch>
            <Route
              to="/home/emergency-electric-inc"
              component={LandingPageHome}
            />
            <Redirect from="/home" to="/home/emergency-electric-inc" />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
