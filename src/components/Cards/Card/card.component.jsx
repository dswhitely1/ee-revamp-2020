import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { cardStyles } from 'styles/components/card.styles';

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
  const classes = cardStyles();
  const cardClasses = cx({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [classes.cardChart]: chart,
    [classes.cardLogin]: login,
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
  pricing: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Card;
