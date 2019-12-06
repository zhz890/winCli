import styled from "styled-components"
export const Contanier = styled.ul`
position:absolute;
left:70px;
top:0;
height:100%;
width:${props => props.width || "130px"}
background:${props => props.background || props.theme.sideBackground};
transform: translateX(-200%);
transition:all ${props => props.time || ".5s"};
z-index:1;
&.open{
  transform: translateX(0);
}
`


export const NavItem = styled.li`
position:relative;
display:block;
width:100%;
font-size:14px;
height:${props => props.height || "40px"};
line-height:${ props => props.height || "40px"}
text-align:left;
color:${props => props.color || props.theme.color2};
cursor:pointer;
box-size:border-sizing;

&.active{
  color:${props => props.hoverColor || props.theme.colorHover}
  background:${props => props.hoverBackground || props.theme.color3}
  &::after{
    content:"›";
    position:absolute;
    right: 16px;
    font-size: 30px;
    top: -3px;
  }
}
`