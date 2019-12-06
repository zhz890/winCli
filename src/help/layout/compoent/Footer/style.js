import styled from "styled-components"

export const Contanier = styled.div`
   height:${props => props.height || "22px"};
   line-height:${props => props.height || "22px"};
   background:${props => props.background || props.theme.footerBackground};
   color:${props => props.color || props.theme.color1};
   font-size: 12px;
   text-align: right;
   padding-right: 28px;
`