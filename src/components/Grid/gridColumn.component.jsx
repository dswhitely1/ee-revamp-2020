import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function GridColumn({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  offset,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  offsetXxl,
}) {
  const colClassNames = cx({
    [`col-${xs}`]: xs,
    [`col-sm-${sm}`]: sm,
    [`col-md-${md}`]: md,
    [`col-lg-${lg}`]: lg,
    [`col-xl-${xl}`]: xl,
    [`col-xxl-${xxl}`]: xxl,
    [`offset-${offset}`]: offset,
    [`offset-sm-${offsetSm}`]: offsetSm,
    [`offset-md-${offsetMd}`]: offsetMd,
    [`offset-lg-${offsetLg}`]: offsetLg,
    [`offset-xl-${offsetXl}`]: offsetXl,
    [`offset-xxl-${offsetXxl}`]: offsetXxl,
  });

  return <div className={colClassNames}>{children}</div>;
}

GridColumn.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto']),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xxl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetSm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetMd: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetLg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetXl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
  offsetXxl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
};

export default GridColumn;
