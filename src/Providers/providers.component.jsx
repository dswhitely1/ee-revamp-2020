import React from 'react';
import RoutingProvider from 'Providers/Routing/router.component';
import PropTypes from 'prop-types';
import ThemeProvider from 'Providers/Theme/theme.component';

function Providers({ children }) {
  return (
    <RoutingProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </RoutingProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Providers;
