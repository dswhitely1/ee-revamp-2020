import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './section.styles.scss';

function Section({ children, className, header, inverted, ...rest }) {
  const sectionClasses = cx({
    section: true,
    'section-header': header,
    'section-inverted': inverted,
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
