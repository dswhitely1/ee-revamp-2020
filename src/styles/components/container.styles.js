import { makeStyles } from '@material-ui/core';
import { transition } from 'styles/common';

export const containerStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    borderRadius: 3,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 32,
      paddingBottom: 32,
    },
    '& > h4': {
      textTransform: 'uppercase',
    },
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  background: {
    backgroundColor: theme.palette.background.default,
    opacity: 0.9,
    ...transition,
    '&:hover': {
      opacity: 1,
      ...transition,
    },
    [theme.breakpoints.down('sm')]: {
      opacity: 1,
    },
  },
  inverted: {
    backgroundColor: '#351a1a',
    color: theme.palette.secondary.main,
    ...transition,
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
      ...transition,
    },
    [theme.breakpoints.down('sm')]: {
      opacity: 1,
    },
  },
}));
