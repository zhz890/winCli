import React, { Component } from 'react';
import homeModel from "./model";
import { connect } from "@lugia/lugiax";
import { withRouter } from "react-router-dom"
import { Table, Tree, Theme } from "@lugia/lugia-web";
import { FilexContanier, LeftContanier, RightContanier, RowContanier } from "../../help/styled/layout"
import Widget from '@lugia/lugia-web/dist/consts';


const data = [
  { value: '1', text: '选项 1' },
  { value: '1.1', text: '选项 1.1', pid: '1', path: '1' },
  {
    value: '1.1.1',
    text: '选项 1.1.1',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true
  },
  {
    value: '1.1.2',
    text: '选项 1.1.2',
    pid: '1.1',
    path: '1/1.1',
    isLeaf: true,
    notCanSelect: true
  },

  { value: '1.2', text: '选项 1.2', pid: '1', path: '1' },
  {
    value: '1.2.1',
    text: '选项 1.2.1',
    pid: '1.2',
    path: '1/1.2',
    isLeaf: true
  },
  { value: '1.2.2', text: '选项 1.2.2', pid: '1.2', path: '1/1.2' },
  {
    value: '1.2.2.1',
    text: '选项 1.2.2.1',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  {
    value: '1.2.2.2',
    text: '选项 1.2.2.2',
    pid: '1.2.2',
    path: '1/1.2/1.2.2',
    isLeaf: true
  },

  { value: '1.3', text: '选项 1.3', pid: '1', path: '1', isLeaf: true },

  { value: '2', text: '选项 2' },
  { value: '2.1', text: '选项 2.1', pid: '2', path: '2', isLeaf: true },
  { value: '2.2', text: '选项 2.2', pid: '2', path: '2', isLeaf: true }
];

class Home extends Component {
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
      render: (item, row, index) => <a href="javascript:;" onClick={(e) => this.deleteItem(e, item, index)}>Delete</a>,
    }];

    const config = {
      [Widget.Tree]: {
        TreeWrap: {
          normal: {
            width: 300
          }
        }
      }
    };

    return (
      <FilexContanier background="#ffffff">
        <LeftContanier width="auto" background="#000000" height="auto">
          <Tree
            theme={config}
            data={data}
            igronSelectField={'notCanSelect'}
            autoHeight
          />
        </LeftContanier>
        <RightContanier>
          <RowContanier><div>{this.props.name}</div></RowContanier>
          <RowContanier><div>{this.props.name}</div></RowContanier>
          <Table columns={columns} data={this.props.data.toJS()} />
        </RightContanier>
      </FilexContanier>
    )
  }

  componentDidMount () {
    this.props.getTable()
  }

  deleteItem = (e, item, index) => {
    this.props.delItems({ list: item, index })
  }
}


export default connect(
  homeModel,
  state => {
    return {
      data: state.get("data"),
      name: state.get("name")
    }

  },
  mutations => {
    return { delItems: mutations.deleteRow, getTable: mutations.asyncGetTable };
  }
)
  (withRouter(Home))