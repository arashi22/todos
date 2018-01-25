import React, { Component } from 'react';
import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-bootstrap3'/* or '@devexpress/dx-react-grid-material-ui' */;
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid
          rows={[
            { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
            { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
          ]}
          columns={[
            { name: 'id', title: 'ID' },
            { name: 'product', title: 'Product' },
            { name: 'owner', title: 'Owner' },
          ]}>
          <Table />
          <TableHeaderRow />
        </Grid>

      </div>
    );
  }
}

export default App;
