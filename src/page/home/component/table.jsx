import React, { Component } from 'react';
import { Table } from "@lugia/lugia-web";

export default class TableTest extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    const columns = [{
      title: 'Name', dataIndex: 'name', key: 'name', width: 100,
    }, {
      title: 'Age', dataIndex: 'age', key: 'age', width: 100,
    }, {
      title: 'Address', dataIndex: 'address', key: 'address', width: 200,
    },

    {
      title: 'Type', dataIndex: 'type', key: 'type', width: 200,
    },
    {
      title: 'Operations', dataIndex: '', key: 'operations',
      render: (item, row, index) => <a href="javascript:;" onClick={(e) => this.deleteRow(e, item, index, row)}>Delete</a>,
    }];
    return (
      <Table columns={columns} data={this.props.data} />
    )
  }

  deleteRow (e, item, index, row) {
    this.props.deleteRow(item, index, row)
  }


}

