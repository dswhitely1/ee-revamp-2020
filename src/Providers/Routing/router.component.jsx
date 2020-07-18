import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
const hist = createBrowserHistory();

function RouterProvider({ children }) {
  return <Router history={hist}>{children}</Router>;
}

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RouterProvider;
