import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    padding: '0 15px',
  },
}));

function GridItem({ children, ...rest }) {
  const classes = useStyles();
  return (
    <Grid className={classes.grid} item {...rest}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridItem;
