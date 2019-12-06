import styled from "styled-components"

export const Contanier = styled.section`
  display:flex;
  flex-direction:column;
  background:${props => props.background || props.theme.background1};
  width:100%;
  height:100vh;
  overflow:hidden;
`


export const Wrapper = styled.div`
   display:flex;
   flex:1;
   background:${props => props.background || props.theme.background1};
   position:relative;
`