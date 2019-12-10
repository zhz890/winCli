import React, { Component } from 'react';
import styled from "styled-components"

const NotFond = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  justify-content: center;
  align-items: center;
  color:${props => props.color || "#f5f5f5"};
  font-size:${props => props.size || "40px"};
  font-weight:700;
  background:#0B1431
`

class OnFond extends Component {
  render () {
    return (
      <NotFond>
        404 nont font
      </NotFond>
    );
  }
}

export default OnFond;