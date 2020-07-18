import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './container.styles.scss';

function Container({ children, className, fluid, maxWidth, ...rest }) {
  const containerClassName = cx({
    container: !fluid && maxWidth === undefined,
    'container-fluid': fluid,
    [`container-${maxWidth}`]: !fluid && maxWidth,
    [className]: className !== undefined,
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
  fluid: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
};

export default Container;
