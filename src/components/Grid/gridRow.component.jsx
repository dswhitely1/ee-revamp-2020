import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './gridRow.styles.scss';

function GridRow({ children, className, ...rest }) {
  const gridRowClassNames = cx({
    row: true,
    [className]: className !== undefined,
  });

  return (
    <div className={gridRowClassNames} {...rest}>
      {children}
    </div>
  );
}

GridRow.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GridRow;
