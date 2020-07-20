import React from 'react';
import PropTypes from 'prop-types';
import {
  createMuiTheme,
  StylesProvider,
  MuiThemeProvider,
} from '@material-ui/core';

const theme = {
  overrides: {
    MuiLink: {
      underlineHover: {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
  },
};

const muiTheme = createMuiTheme(theme);

function ThemeProvider({ children }) {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </StylesProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
