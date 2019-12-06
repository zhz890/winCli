import styled from "styled-components"
export const Contanier = styled.ul`
position:absolute;
left:0;
top:0;
height:100%;
width:${props => props.width || "70px"}
background:${props => props.background || props.theme.sideBackground};
transform: translateX(-100%);
transition:all ${props => props.time || ".5s"};
z-index:1;
&.open{
  transform: translateX(0);
}
`

export const NavItem = styled.li`
   display:block;
   width:100%;
   font-size:14px;
   height:${props => props.height || "40px"};
   line-height:${ props => props.height || "40px"}
   text-align:center;
   color:${props => props.color || props.theme.color4};
   cursor:pointer;
   &.active{
     color:${props => props.hoverColor || props.theme.colorHover};
     background:${props => props.hoverBackground || props.theme.color3}
   }
   
`