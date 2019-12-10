import React, { Component } from 'react';
import { Table } from "antd";
import { TableContanier } from "./style"

export default class TableTest extends Component {
  render () {
    console.log(this.props)
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    return (
      <TableContanier>
        <Table columns={columns} dataSource={this.props.data} />
      </TableContanier>
    )
  }

  deleteRow (e, item, index, row) {
    this.props.deleteRow(item, index, row)
  }


}

