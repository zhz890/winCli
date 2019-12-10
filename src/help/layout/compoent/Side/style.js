import styled from "styled-components"
export const Contanier = styled.ul`
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