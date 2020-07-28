import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function Card({
  className,
  children,
  plain,
  profile,
  blog,
  raised,
  background,
  pricing,
  color,
  product,
  testimonial,
  chart,
  login,
  ...rest
}) {
  const cardClasses = cx({
    card: true,
    'card-plain': plain,
    'card-profile': profile,
    'card-blog': blog,
    'card-raised': raised,
    'card-background': background,
    'card-pricing-color':
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [`card-${color}`]: color,
    'card-pricing': pricing,
    'card-product': product,
    'card-chart': chart,
    'card-login': login,
    [className]: className !== undefined,
  });

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  blog: PropTypes.bool,
  raised: PropTypes.bool,
  background: PropTypes.bool,
  testimonial: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'sedcondary',
    'success',
    'warning',
    'danger',
    'info',
  ]),
  product: PropTypes.bool,
  chart: PropTypes.bool,
  login: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Card;
