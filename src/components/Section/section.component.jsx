import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { sectionStyles } from 'styles/components/section.styles';

function Section({ children, className, header, inverted, ...rest }) {
  const classes = sectionStyles();
  const sectionClasses = cx({
    [classes.root]: true,
    [classes.header]: header,
    [classes.inverted]: inverted,
    [className]: className !== undefined,
  });

  return (
    <section className={sectionClasses} {...rest}>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool,
  inverted: PropTypes.bool,
  className: PropTypes.string,
};

export default Section;
