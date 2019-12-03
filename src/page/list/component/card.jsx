import React, { Component } from 'react';
import { Card, Theme } from '@lugia/lugia-web';
class Cards extends Component {

  render () {

    return (
      <Theme>
        <Card
          title={this.props.title}
          description={this.props.description}
          shadow={'always'}
          operation={
            <span onClick={this.click} >
              操作
            </span>
          }
        />
      </Theme>
    );
  }
  click = () => {
    alert(111)
  }
}

export default Cards;