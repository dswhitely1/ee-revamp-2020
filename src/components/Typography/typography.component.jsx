import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './typography.styles.scss';

function Typography({ variant, content, color, className }) {
  const Element = variant;
  const typographyClasses = cx({
    [`typography-${color}`]: color,
    [className]: className !== undefined,
  });

  return <Element className={typographyClasses}>{content}</Element>;
}

Typography.defaultProps = {
  color: 'dark',
  variant: 'p',
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'info',
    'warning',
    'dark',
  ]),
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Typography;
