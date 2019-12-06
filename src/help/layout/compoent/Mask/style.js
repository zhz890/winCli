import styled from "styled-components"

export const Contanier = styled.div`
   position:absolute;
   left:0;
   right:0;
   top:0;
   bottom:0;
   background:${props => props.background || props.theme.maskBackground};
   opacity:${props => props.opacity || ".6"};
   z-index:0;

`