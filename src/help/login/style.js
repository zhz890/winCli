import styled from "styled-components";
import Bg from "../../assets/image/lognbg.png"
export const Contanier = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background:url(${Bg}) no-repeat;
background-size: 100%;
`


export const LoginContanier = styled.div`
  display: flex; 
  width:100%;
  position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const MaskContanier = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);

`