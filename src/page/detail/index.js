import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Modal, Input, Select, Theme } from '@lugia/lugia-web';
import Widgets from '@lugia/lugia-web/dist/consts';
import styled from "styled-components";
import { connect } from "@lugia/lugiax";
import withRole from "../../help/role/withRole";
import homeModel from "../home/model/model";
import detailModel from "../detail/model/model";
const FormItem = styled.div`
   display:flex;
   windth:100%;
   flex-direction:row;
   flex-wrap:wrap;
   padding:${props => props.paddingTop || "18px"};
   border-bottom:1px solid ${props => props.bdc || "#6B7286"};
   justify-content:space-between;
   &:last-of-type{
    border-bottom:0px solid ${props => props.bdc || "#6B7286"};
   }
   >div{
     margin-top:6px;
   }
   label{
    display: inline-block;
    color: #999;
    vertical-align: middle;
    margin-right: 6px;
   }
`

const data = [
  {
    value: 'lugia-A',
    text: '杰尼龟',
    disabled: true
  },
  {
    value: 'lugia-B',
    text: '火恐龙'
  },
  {
    value: 'lugia-C',
    text: '绿毛虫'
  },
  {
    value: 'lugia-D',
    text: '独角虫'
  },
  {
    value: 'lugia-E',
    text: '皮卡丘'
  }
];
class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }


  render () {
    const { match: { params: { id } }, address, name, age, type } = this.props;
    //添加Modal主题色
    const view = {
      [Widgets.Modal]: {
        ModalWrap: {
          normal: {
            background: { color: "#000000" },
            width: 800,
          }
        }
      }
    };
    //获取url的带过来的变量
    return (
      <div>
        {
          this.getButtonRole()
        }
        <Button onClick={this.deleteAddRole}>删除增加的权限</Button>
        <Button onClick={this.Click}>弹框添加数据给home表格</Button>
        <Theme config={view}>
          <Modal
            visible={this.state.visible}
            title="这是标题！"
            onOk={this.buttonClick}
            onCancel={this.buttonClick}
            style={{ "width": "800px" }}
          >
            <FormItem>
              <div>
                <label>name</label>
                <Input value={name} onChange={this.changeInputName}></Input>
              </div>
              <div>
                <label>address</label>
                <Input value={address} onChange={this.changInputAddress}></Input>
              </div>
            </FormItem>
            <FormItem>
              <div>
                <label >age</label>
                <Input value={age} onChange={this.changInputAge} ></Input>
              </div>
              <div>
                <label >{type.get("displayValue")}</label>
                <Select value={type.get("value")}
                  displayValue={type.get("displayValue")} data={data} onChange={this.onChangeSelect} />
              </div>
            </FormItem>
          </Modal>
        </Theme>
      </div >
    );
  }
  Click = () => {
    this.setState({
      visible: true
    });
  };

  getButtonRole = () => {
    const { roles } = this.props
    let buttonGroup = []
    if (roles.get("add")) {
      buttonGroup.push(<Button>增加</Button>)
    }
    if (roles.get("see")) {
      buttonGroup.push(<Button>查看</Button>)
    }
    if (roles.get("deletes")) {
      buttonGroup.push(<Button>删除</Button>)
    }

    return buttonGroup
  }

  deleteAddRole = () => {
    this.props.deleteAdd()
  }

  buttonClick = () => {
    const { address, name, age, type } = this.props;
    let params = {
      name: name,
      age: age,
      address: address,
      type: type.get("displayValue").get(0)
    }
    this.props.addTableRow(params);
    this.setState({
      visible: false
    });
    alert("已经将detail的添加的数据传递到home页面啦")
  };
  changeInputName = ({ newValue: value }) => {
    this.props.changeName(value)
  }
  changInputAddress = ({ newValue: value }) => {
    this.props.changeAddress(value)
  }

  changInputAge = ({ newValue: value }) => {
    this.props.changeAge(value)
  }
  onChangeSelect = ({ newValue, newDisplayValue }) => {
    this.props.changeType({ newValue, newDisplayValue })
  }
}

export default connect(
  [detailModel, homeModel],
  state => {
    const [detailModel] = state
    return {
      address: detailModel.get("address"),
      name: detailModel.get("name"),
      age: detailModel.get("age"),
      type: detailModel.get("type")
    }

  },
  mutations => {
    const [detailModel, homeModel] = mutations
    return {
      changeName: detailModel.changeName,
      changeAge: detailModel.changeAge,
      changeAddress: detailModel.changeAddress,
      changeType: detailModel.changeType,
      addTableRow: homeModel.addTableRow,
      deleteAdd: detailModel.deleteAdd
    };
  }
)(withRouter(withRole(Detail)));