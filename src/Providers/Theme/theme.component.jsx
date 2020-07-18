import React from 'react';
import PropTypes from 'prop-types';
import { StylesProvider } from '@material-ui/core';

function ThemeProvider({ children }) {
  return <StylesProvider injectFirst>{children}</StylesProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
