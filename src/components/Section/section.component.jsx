import { makeStyles } from '@material-ui/core';
import header from 'assets/header.jpg';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  background: {
    [theme.breakpoints.down('sm')]: {
      background: `linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 100%), url(${header})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
}));

function Section({ children, className, header, inverted, ...rest }) {
  const classes = useStyles();
  const sectionClasses = cx({
    section: true,
    'section-header': header,
    [classes.background]: header,
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
