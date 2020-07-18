import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './button.styles.scss';
import { forwardRef } from 'react';
import { Button } from '@material-ui/core';

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

export default RegularButton;
