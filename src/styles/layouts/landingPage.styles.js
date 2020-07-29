import { makeStyles } from '@material-ui/core';
import header from 'assets/header.jpg';

export const landingPageStyles = makeStyles((theme) => ({
  wrapper: {
    height: 'auto',
    minHeight: '100vh',
    position: 'relative',
    top: 0,
  },
  fullPage: {
    background: `linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 100%), url(${header})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 'calc(100% - 192px)',
    [theme.breakpoints.down('sm')]: {
      background: 'none',
    },
    '& footer': {
      position: 'absolute',
      bottom: '0',
      width: '100%',
      border: 'none !important',
    },
  },
}));
