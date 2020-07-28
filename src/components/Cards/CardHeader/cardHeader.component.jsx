import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function CardHeader({
  className,
  children,
  color,
  plain,
  image,
  contact,
  signUp,
  stats,
  icon,
  text,
  ...rest
}) {
  const cardHeaderClasses = cx({
    'card-header': true,
    [`card-header-${color}`]: color,
    'card-header-plain': plain,
    'card-header-image': image,
    'card-header-contact': contact,
    'card-header-sign-up': signUp,
    'card-header-stats': stats,
    'card-header-icon': icon,
    'card-header-text': text,
    [className]: className !== undefined,
  });

  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'warning',
    'danger',
    'success',
    'info',
  ]),
  plain: PropTypes.bool,
  image: PropTypes.bool,
  contact: PropTypes.bool,
  signUp: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  text: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CardHeader;
