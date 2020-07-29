import Footer from 'components/Footer/footer.component';
import LandingPageNavBar from 'components/NavBars/LandingPage/landingPageNavBar.component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { landingPageStyles } from 'styles/layouts/landingPage.styles';
import LandingPageHome from 'views/landingPage.component';

function LandingPage({ ...rest }) {
  const classes = landingPageStyles();

  return (
    <div>
      <LandingPageNavBar color="primary" {...rest} />
      <div className={classes.wrapper}>
        <div className={classes.fullPage}>
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
