import { makeStyles } from '@material-ui/core';
import { container, containerFluid } from 'styles/common';

const positionFooter = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const footerStyles = makeStyles((theme) => ({
  block: {},
  footer: {
    bottom: 0,
    padding: theme.spacing(2, 0),
    zIndex: 4,
    borderTop: '1px solid #e7e7e7',
    backgroundColor: '#222222',
    color: theme.palette.secondary.main,
  },
  container: {
    ...container,
    zIndex: 3,
    position: 'relative',
    ...positionFooter,
  },
  containerFluid: {
    ...containerFluid,
    zIndex: 3,
    position: 'relative',
    ...positionFooter,
  },
  a: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  list: {
    marginBottom: 0,
    padding: 0,
    marginTop: 0,
  },
  inlineBlock: {
    display: 'inline-block',
    padding: 0,
    width: 'auto',
  },
  whiteColor: {
    '&,&:hover,&:focus': {
      color: theme.palette.common.white,
    },
  },
}));
