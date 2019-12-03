import React, { Component } from 'react';
import { Tabs, Theme } from '@lugia/lugia-web';
import Widgets from '@lugia/lugia-web/dist/consts';
import Cards from "./component/card";
import styled from "styled-components"
const Wrapper = styled.div`
  text-align: left;
  display: inline-block;
`;
class List extends Component {
  render () {

    const view = {
      [Widgets.Tabs]: {
        width: 500,
        color: "red"
      }
    };

    const defaultData = [
      {
        title: '测试jsx',
        content: <div style={{ 'color': 'red' }}>content of Tab1</div>,
        activityKey: '0',
        key: 1
      },
      {
        title: '测试自定义组件',
        content: <Cards title="这是一个card" description="这是个说明" />,
        activityKey: '1',
        key: 2
      },
      {
        title: '测试一般文字',
        activityKey: '测试一般文字',
        title: 'Tab3',
        key: 3
      },
      {
        activityKey: '3',
        title: 'Tab4',
        content: <div>content of Tab4</div>
      },
      {
        activityKey: '4',
        title: 'Tab5',
        content: <div>content of Tab5</div>
      },
      {
        activityKey: '5',
        title: 'Tab6',
        content: <div>content of Tab6</div>
      },
      {
        activityKey: '6',
        title: 'Tab7',
        content: <div>content of Tab7</div>
      },
      {
        activityKey: '7',
        title: 'Tab8',
        content: <div>content of Tab8</div>
      }
    ];
    return (
      <Theme config={view}>
        <div>
          <Wrapper>
            <Tabs
              tabType='line'
              tabPosition="left"
              onTabClick={this.tabClick}
              data={defaultData}
            />
          </Wrapper>
        </div>
      </Theme >
    );
  }

  tabClick (n) {
    console.log(n)
  }
}

export default List;