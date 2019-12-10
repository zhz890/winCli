import React, { Component } from 'react';
import { Tabs } from 'antd';
import withUserConfig from "../../../help/hoc/withUserConfig"
import { Contanier } from "./style"
const { TabPane } = Tabs;


class TabsRole extends Component {
  render () {
    return (
      <Contanier>
        <Tabs defaultActiveKey="1" >
          {
            this.getButtonComponent()
          }
        </Tabs>,
      </Contanier>
    );
  }

  getButtonComponent = () => {
    /*lugix用户在这该菜单下的功能权限**/
    const { roles } = this.props;
    return Object.keys(roles).map((item, index) => {
      if (roles[item]) {
        return (<TabPane tab={index == 1 ? "新增" : index == 2 ? "查看" : "删除"} key={index}>
        </TabPane>)
      }
    })
  }



}




export default withUserConfig(TabsRole)

