import React, { Component } from 'react';
import { Tabs } from 'antd';
import withBase from "../../../help/hoc/withBase"
const { TabPane } = Tabs;

class MyTabs extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <Tabs defaultActiveKey="1" >
          {
            this.getButtonComponent()
          }
        </Tabs>,
      </div>
    );
  }

  getButtonComponent = () => {
    const { roles } = this.props;
    return Object.keys(roles).map((item, index) => {
      if (roles[item]) {
        return (<TabPane tab={index == 1 ? "新增" : index == 2 ? "查看" : "删除"} key={index}>
          Content of Tab Pane {index}
        </TabPane>)
      }
    })
  }

  componentDidMount () {
    this.props.asyncHttpRole()
  }

}




export default withBase(MyTabs, "layout")

