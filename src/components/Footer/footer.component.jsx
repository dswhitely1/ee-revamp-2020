import { Link, List, ListItem } from '@material-ui/core';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Scrollchor from 'react-scrollchor';
import { footerStyles } from 'styles/components/footer.styles';
import footerLinks from './footerLinks.js';

function Footer({ fluid, white }) {
  const classes = footerStyles();
  const classPrefix = 'footer';
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const anchor = cx({
    [classes.a]: true,
    [classes.whiteColor]: white,
  });

  return (
    <footer className={classes.footer}>
      <div className={container}>
        <List className={classes.list}>
          {footerLinks.map(({ title, link, key }) => (
            <ListItem className={classes.inlineBlock} key={key}>
              <Link component={Scrollchor} to={link} className={anchor}>
                {title}
              </Link>
            </ListItem>
          ))}
        </List>
        <p>
          &copy; {`${new Date().getFullYear()} `}
          <Link
            href="https://www.donwhitely.com"
            target="_blank"
            color="secondary"
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
