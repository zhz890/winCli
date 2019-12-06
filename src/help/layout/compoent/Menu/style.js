import styled from "styled-components"
export const Container = styled.div`
   position:absolute;
   left:199px;
   top:0;
   height:100%;
   padding:10px 30px;
   background:${props => props.background || props.theme.mendBackground};
   transition:all ${props => props.time || ".5s"};
   transform: translateX(-180%);
    &.open{
       transform: translateX(0);
    }
    z-index:1;
`
export const InputContanier = styled.div`
  
`

export const MenuContanier = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: ${props => props.width || "800px"}
    overflow:hidden
`
export const DivContanier = styled.div`
     margin-top:16px;
      width: 200px;
      margin-top: 42px;
      margin-right: 30px;
      box-sizing: border-box;
     >p{
      margin-bottom: 16px;
      font-size: 14px;
      margin-left: 12px;
      font-weight: 700;
       color:${props => props.color || props.theme.colorWrite}
     }
`
export const UlContanier = styled.ul`
  li{
    position: relative;
    margin-bottom: 2px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    padding-left: 15px;
    box-size:borde-sizing;
    color:${props => props.color || props.theme.color4}
    cursor:pointer;
    &:hover{
      color:${props => props.hoverColor || props.theme.colorHover};
      background:${props => props.hoverBackground || props.theme.headerBackground}
    }
    span{
      display: inline-block;
      vertical-align: middle;
      &:first-of-type{
        padding-right:6px;
      }
      &:last-of-type{
         position:absolute;
         right:26px;
      }
    }
  }
`