import styled from "styled-components"
export const MainContanier = styled.div`
   display:flex;
   flex:1
   background:${props => props.background || props.theme.mainBackground}
`