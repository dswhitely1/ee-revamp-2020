import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  responsiveFontSizes,
  StylesProvider,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const theme = {
  palette: {
    primary: { main: '#670300' },
    secondary: { main: '#b48a66' },
    background: { default: '#fbf7f5' },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    h1: { fontFamily: '"Raleway", sans-serif' },
    h2: { fontFamily: '"Raleway", sans-serif' },
    h3: { fontFamily: '"Raleway", sans-serif' },
    h4: { fontFamily: '"Raleway", sans-serif' },
    h5: { fontFamily: '"Raleway", sans-serif' },
    h6: { fontFamily: '"Raleway", sans-serif' },
  },
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

const muiTheme = responsiveFontSizes(createMuiTheme(theme));

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
