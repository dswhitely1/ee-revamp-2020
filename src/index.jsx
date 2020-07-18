import React from 'react';
import { render } from 'react-dom';
import 'index.scss';
import { StylesProvider } from '@material-ui/core';
import Container from 'components/Container/container.component';
import GridRow from 'components/Grid/gridRow.component';
import GridColumn from 'components/Grid/gridColumn.component';
import Button from 'components/CustomButtons/button.component';
import Card from 'components/Cards/Card/card.component';

const App = () => (
  <StylesProvider injectFirst>
    <Card>
      <h1>Hello Emergency Electric</h1>
      <Button size="sm" color="primary">
        Hello World
      </Button>
    </Card>
  </StylesProvider>
);

render(<App />, document.getElementById('root'));
