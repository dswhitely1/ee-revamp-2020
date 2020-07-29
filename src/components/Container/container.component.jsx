import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { containerStyles } from 'styles/components/container.styles';
function Container({ children, className, header, top, description, ...rest }) {
  const classes = containerStyles();
  const containerClassName = cx({
    [classes.root]: true,
    [classes.header]: header,
    [classes.top]: top,
    [classes.description]: description,
  });

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.bool,
  description: PropTypes.bool,
  top: PropTypes.bool,
};

export default Container;
