import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

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
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StylesProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
