import { makeStyles } from '@material-ui/core';

export const buttonContainerStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  form: {
    justifyContent: 'flex-end',
  },
}));
