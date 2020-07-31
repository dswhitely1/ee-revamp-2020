import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { cardFooterStyle } from 'styles/components/cardFooter.styles';

function CardFooter({
  children,
  plain,
  product,
  profile,
  testimonial,
  pricing,
  stats,
  chart,
  className,
  ...rest
}) {
  const classes = cardFooterStyle();
  const cardFooterClasses = cx({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart || product,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool,
  product: PropTypes.bool,
};

export default CardFooter;
