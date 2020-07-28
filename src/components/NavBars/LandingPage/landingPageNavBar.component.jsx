import {
  AppBar,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import cx from 'classnames';
import Button from 'components/CustomButtons/button.component';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function LandingPageNavBar({ color, brandText }) {
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => setOpen(!open);
  const classPrefix = 'landing-page-nav-bar-';

  const appBarClasses = cx({
    [`${classPrefix}appbar`]: true,
    [`${classPrefix}${color}`]: color,
  });
  return (
    <AppBar position="static" className={appBarClasses}>
      <Toolbar className={`${classPrefix}container`}>
        <Hidden smDown>
          <div className={`${classPrefix}flex`}>
            <Button
              href="#"
              className={`${classPrefix}title`}
              color="transparent"
            >
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={`${classPrefix}flex`}>
            <Button
              href="#"
              className={`${classPrefix}title`}
              color="transparent"
            >
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>
          <List className={`${classPrefix}list`}>
            <ListItem className={`${classPrefix}list-item`}>
              <Button
                color="transparent"
                href="tel:5027274823"
                className={`${classPrefix}nav-link`}
              >
                <ListItemText
                  primary="502-727-4823"
                  disableTypography
                  className={`${classPrefix}list-item-text`}
                />
              </Button>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <Button
            className={`${classPrefix}side-bar-button`}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor="right"
              open={open}
              classes={{ paper: `${classPrefix}drawer-paper` }}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
            >
              <List className={`${classPrefix}list`}>
                <ListItem className={`${classPrefix}list-item`}>
                  <Button
                    color="primary"
                    href="tel:5027274823"
                    className={`${classPrefix}nav-link`}
                  >
                    <ListItemText
                      primary="502-727-4823"
                      disableTypography
                      className={`${classPrefix}list-item-text`}
                    />
                  </Button>
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

LandingPageNavBar.defaultProps = {
  brandText: 'Emergency Electric Inc',
};

LandingPageNavBar.propTypes = {
  brandText: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'danger',
    'warning',
  ]),
};

export default LandingPageNavBar;
