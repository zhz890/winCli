import React, { Component } from 'react';
import { connect } from "@lugia/lugiax";
import { withRouter } from "react-router-dom"
import TableText from "./component/table"
import homeModel from "./model/model";
import { FilexContanier, RightContanier, RowContanier } from "../../help/styled/layout"


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <FilexContanier background="#ffffff">
        <RightContanier>
          <RowContanier><div>你删除了：{this.props.name}列</div></RowContanier>
          <TableText data={this.props.data.toJS()} deleteRow={this.deleteRow}></TableText>
        </RightContanier>
      </FilexContanier>
    )
  }

  componentDidMount () {
    this.props.getTable()
  }

  componentDidUpdate () {
    console.log(this.props.data.toJS())
  }

  deleteRow = (item, index, row) => {
    this.props.delItemRow({ list: item, index })
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
    return { delItemRow: mutations.deleteRow, getTable: mutations.asyncGetTable };
  }
)
  (withRouter(Home))