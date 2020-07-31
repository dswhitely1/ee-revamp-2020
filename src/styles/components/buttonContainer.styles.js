import { makeStyles } from '@material-ui/core';

export const buttonContainerStyles = makeStyles((theme) => ({
  buttonContainer: {
    margin: theme.spacing(3, 0),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  form: {
    justifyContent: 'flex-end',
  },
}));
