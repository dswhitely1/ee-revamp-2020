import React from 'react';
import Header from 'views/LandingPage/header.component';
import header from 'assets/header.jpg';
import { makeStyles } from '@material-ui/core/styles';

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

function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header />
    </div>
  );
}

export default LandingPage;
