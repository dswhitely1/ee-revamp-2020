import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { cardBodyStyles } from 'styles/components/cardBody.styles';

function CardBody({
  className,
  children,
  background,
  plain,
  formHorizontal,
  pricing,
  signUp,
  color,
  profile,
  calendar,
  ...rest
}) {
  const classes = cardBodyStyles();
  const cardBodyClasses = cx({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardBodyPricing]: pricing,
    [classes.cardBodySignUp]: signUp,
    [classes.cardBodyColor]: color,
    [classes.cardBodyProfile]: profile,
    [classes.cardBodyCalendar]: calendar,
    [className]: className !== undefined,
  });

  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  plain: PropTypes.bool,
  formHorizontal: PropTypes.bool,
  pricing: PropTypes.bool,
  signUp: PropTypes.bool,
  color: PropTypes.bool,
  profile: PropTypes.bool,
  calendar: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default CardBody;
