import { Button } from '@material-ui/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { buttonStyles } from 'styles/components/button.styles';

const RegularButton = forwardRef((props, ref) => {
  const classes = buttonStyles();
  const {
    children,
    className,
    color,
    size,
    round,
    fullWidth,
    disabled,
    simple,
    block,
    link,
    justIcon,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = cx({
    [classes.root]: true,
    [classes[`${size}`]]: size,
    [classes[`${color}`]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className !== undefined,
  });
  return (
    <Button ref={ref} className={btnClasses} classes={muiClasses} {...rest}>
      {children}
    </Button>
  );
});

RegularButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'twitter',
    'facebook',
    'google',
    'linkedIn',
    'pinterest',
    'youtube',
    'tumblr',
    'behance',
    'dribbble',
    'reddit',
    'github',
    'transparent',
  ]),
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  simple: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  muiClasses: PropTypes.object,
};

export default RegularButton;
