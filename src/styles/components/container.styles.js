import { makeStyles } from '@material-ui/core';

export const containerStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '85vh',
    [theme.breakpoints.up('md')]: {
      height: 'auto',
    },
  },
  top: {
    marginTop: theme.spacing(8),
  },
  description: {
    width: '83%',
  },
}));
