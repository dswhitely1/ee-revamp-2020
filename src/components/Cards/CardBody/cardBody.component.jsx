import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

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
  const cardBodyClasses = cx({
    'card-body': true,
    'card-body-background': background,
    'card-body-plain': plain,
    'card-body-form-horizontal': formHorizontal,
    'card-body-pricing': pricing,
    'card-body-sign-up': signUp,
    'card-body-color': color,
    'card-body-profile': profile,
    'card-body-calendar': calendar,
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
