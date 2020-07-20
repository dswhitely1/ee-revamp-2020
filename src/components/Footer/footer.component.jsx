import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './footer.styles.scss';
import { Link, List, ListItem } from '@material-ui/core';
import Scrollchor from 'react-scrollchor';
import footerLinks from './footerLinks.js';

function Footer({ fluid, white }) {
  const classPrefix = 'footer-';
  const container = cx({
    [`${classPrefix}container`]: !fluid,
    [`${classPrefix}container-fluid`]: fluid,
    [`${classPrefix}white-color`]: white,
  });
  const anchor = cx({
    [`${classPrefix}a`]: true,
    [`${classPrefix}white-color`]: white,
  });

  return (
    <footer className={`${classPrefix}footer`}>
      <div className={container}>
        <List className={`${classPrefix}list`}>
          {footerLinks.map(({ title, link, key }) => (
            <ListItem className={`${classPrefix}inline-block`} key={key}>
              <Link component={Scrollchor} to={link} className={anchor}>
                {title}
              </Link>
            </ListItem>
          ))}
        </List>
        <p className={`${classPrefix}branding`}>
          &copy; {`${new Date().getFullYear()} `}
          <Link
            href="https://www.donwhitely.com"
            target="_blank"
            className={anchor}
          >
            Digital Solutions By Don
          </Link>
          {`, All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
};

export default Footer;
