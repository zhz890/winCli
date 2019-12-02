import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button, Modal, Input, Select } from '@lugia/lugia-web';
import styled from "styled-components";
import { connect } from "@lugia/lugiax";
import InputModel from "./model";
import homeModel from "../home/model";
import "./style.css"
const FormItem = styled.div`
   display:flex;
   width:600px;
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
    return (
      <div>
        <Button onClick={this.Click}>Modal</Button>
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
      </div>
    );
  }
  Click = () => {
    this.setState({
      visible: true
    });
  };
  buttonClick = () => {
    const { match: { params: { id } }, address, name, age, type } = this.props;
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
  [InputModel, homeModel],
  state => {
    const [InputModel] = state
    return {
      address: InputModel.get("address"),
      name: InputModel.get("name"),
      age: InputModel.get("age"),
      type: InputModel.get("type")
    }

  },
  mutations => {
    const [InputModel, homeModel] = mutations
    return {
      changeName: InputModel.changeName,
      changeAge: InputModel.changeAge,
      changeAddress: InputModel.changeAddress,
      changeType: InputModel.changeType,
      addTableRow: homeModel.addTableRow,
    };
  }
)(withRouter(Detail));