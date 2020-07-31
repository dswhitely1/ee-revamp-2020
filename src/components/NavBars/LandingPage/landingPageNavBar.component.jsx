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
import { landingPageNavBarStyles } from 'styles/components/landingPageNavBar.styles';

function LandingPageNavBar({ color, brandText }) {
  const classes = landingPageNavBarStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => setOpen(!open);

  const appBarClasses = cx({
    [classes.appBar]: true,
    [classes[color]]: color,
  });
  return (
    <AppBar position="static" className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                color="transparent"
                href="tel:5027274823"
                className={classes.navLink}
              >
                <ListItemText
                  primary="502-727-4823"
                  disableTypography
                  className={classes.listItemText}
                />
              </Button>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sideBarButton}
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
              classes={{ paper: classes.drawerPaper }}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true }}
            >
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    color="primary"
                    href="tel:5027274823"
                    className={classes.navLink}
                  >
                    <ListItemText
                      primary="502-727-4823"
                      disableTypography
                      className={classes.listItemText}
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
