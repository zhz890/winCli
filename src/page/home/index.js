import React, { Component } from 'react';
import styled from "styled-components";
import MyTabs from "./component/TabsRole";
import MyTable from "./component/Table";
import withBase from "../../help/hoc/withPageConfig"
export const Row = styled.div`
  margin-bottom:${props => props.mb || "10px"}
`

class Home extends Component {
  render () {
    const { data } = this.props
    return (
      <>
        <div style={{ width: "100%" }}>
          <Row>
            <MyTabs></MyTabs>
            {

              data.length ? <MyTable {...this.props}></MyTable> : ""
            }

          </Row>
        </div>
      </>
    )
  }

  componentDidMount () {
    const { asyncHttpTable } = this.props
    asyncHttpTable()
  }
}


export default withBase(Home, "home")