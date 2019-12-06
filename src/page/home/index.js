import React, { Component } from 'react';
import styled from "styled-components";
import { Input } from 'antd';
// import Securities from "./component/Securities";
import MyTabs from "./component/Tabs"


export const Row = styled.div`
  margin-bottom:8px
`

export default class Home extends Component {
  render () {
    return (
      <>
        <div style={{ width: "100%" }}>
          <Row>
            <MyTabs></MyTabs>
          </Row>
        </div>
      </>
    )
  }
}


