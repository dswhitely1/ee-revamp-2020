import React from 'react';
import PropTypes from 'prop-types';
import { buttonContainerStyles } from 'styles/components/buttonContainer.styles';
import cx from 'classnames';

function ButtonContainer({ children, form }) {
  const classes = buttonContainerStyles();
  const buttonContainerClasses = cx({
    [classes.root]: true,
    [classes.form]: form,
  });
  return <div className={buttonContainerClasses}>{children}</div>;
}

ButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
  form: PropTypes.bool,
};

export default ButtonContainer;
