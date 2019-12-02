import styled from "styled-components"

export const FilexContanier = styled.section`
 display:flex;
 flex-direction:row;
 background:${props => props.background || "transparent"}
`


export const LeftContanier = styled.div`
  display:flex;
  flex-direction:${props => props.direction || "column"};
  width:${props => props.width || "800px"};
  height:${props => props.height || "400px"}
  background:${props => props.background || "transparent"};
  &.small{
    width:100px
  }
`

export const RightContanier = styled.div`
  flex:1;
  background:${props => props.background || "transparent"}
`

export const RowContanier = styled.div`
  display:flex;
  flex-direction:${props => props.direction || "column"};
  padding:0 ${props => props.paddLR || "10px"}
  margin:${props => props.top || "10px"} 0;
  background:${props => props.background || "transparent"}
`