import { Typography } from '@material-ui/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { typographyStyles } from 'styles/components/typography.styles';

function CustomTypography({
  className,
  content,
  header,
  noMargin,
  spacing,
  title,
  ...rest
}) {
  const classes = typographyStyles();
  const typographyClasses = cx({
    [classes.root]: true,
    [classes.header]: header,
    [classes.noMargin]: noMargin,
    [classes.spacing]: spacing,
    [classes.title]: title,
    [className]: className !== undefined,
  });

  return (
    <Typography className={typographyClasses} {...rest}>
      {content}
    </Typography>
  );
}

CustomTypography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.oneOf([
    'initial',
    'inherit',
    'primary',
    'secondary',
    'textPrimary',
    'textSecondary',
    'error',
  ]),
  content: PropTypes.string.isRequired,
  title: PropTypes.bool,
  spacing: PropTypes.bool,
  noMargin: PropTypes.bool,
  header: PropTypes.bool,
  className: PropTypes.string,
};

export default CustomTypography;
