import { makeStyles } from '@material-ui/core/styles';
import header from 'assets/header.jpg';
import cx from 'classnames';
import Footer from 'components/Footer/footer.component';
import LandingPageNavBar from 'components/NavBars/LandingPage/landingPageNavBar.component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LandingPageHome from 'views/landingPage.component';

const useStyles = makeStyles((theme) => ({
  background: {
    background: `linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 100%), url(${header})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100% - 192px)',
    [theme.breakpoints.down('sm')]: {
      background: 'none',
    },
  },
}));

function LandingPage({ ...rest }) {
  const classes = useStyles();
  const classNames = cx({
    'landing-page-full-page': true,
    [classes.background]: true,
  });
  return (
    <div>
      <LandingPageNavBar color="primary" {...rest} />
      <div className="landing-page-wrapper">
        <div className={classNames}>
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
