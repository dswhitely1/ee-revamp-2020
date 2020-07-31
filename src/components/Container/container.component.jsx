import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { containerStyles } from 'styles/components/container.styles';
import { Container } from '@material-ui/core';

function CustomContainer({
  children,
  className,
  header,
  top,
  description,
  inverted,
  ...rest
}) {
  const classes = containerStyles();
  const containerClassName = cx({
    [classes.container]: true,
    [classes.background]: !header,
    [classes.inverted]: !header && inverted,
    [classes.header]: header,
    [classes.top]: top,
    [classes.description]: description,
    [className]: className !== undefined,
  });

  return (
    <Container className={containerClassName} {...rest}>
      {children}
    </Container>
  );
}

CustomContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.bool,
  description: PropTypes.bool,
  top: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default CustomContainer;
