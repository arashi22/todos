import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PagingState, IntegratedPaging } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-bootstrap3'/* or '@devexpress/dx-react-grid-material-ui' */;

import './style.css';

export class Todos extends Component {
  static propTypes = {
    datas: PropTypes.array,
  }

  static defaultProps = {
    datas: [],
  }

  render() {
    const { datas } = this.props
    return (
      <div className="app">
        <Grid
          rows={datas.map(item => Object.assign({}, item, {completed: item.completed ? 'true' : 'false'}))}
          columns={[
            { name: 'id', title: 'ID' },
            { name: 'title', title: 'Title' },
            { name: 'completed', title: 'Completed' },
            { name: 'userId', title: 'UserID' },
          ]}>
          <PagingState
            defaultCurrentPage={0}
            pageSize={10}
          />
          <IntegratedPaging />
          <Table />
          <TableHeaderRow />
          <PagingPanel pageSizes={[5, 10, 15, 0]} />
        </Grid>
      </div>
    );
  }
}

export default Todos;
