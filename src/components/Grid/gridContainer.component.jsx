import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  grid: {
    margin: '0 -15px',
    width: 'calc(100% + 30px)',
  },
}));

function GridContainer({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid} {...rest}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridContainer;
