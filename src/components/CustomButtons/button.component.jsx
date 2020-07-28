import { Button } from '@material-ui/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const RegularButton = forwardRef((props, ref) => {
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
    btn: true,
    [`btn-${size}`]: size,
    [`btn-${color}`]: color,
    'btn-round': round,
    'btn-full-width': fullWidth,
    'btn-disabled': disabled,
    'btn-simple': simple,
    'btn-block': block,
    'btn-link': link,
    'btn-just-icon': justIcon,
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
