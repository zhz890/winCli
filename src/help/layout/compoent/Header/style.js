import styled from "styled-components";


export const Contanier = styled.div`
  display:flex;
  flex-direction:row;
  height:${props => props.height || "48px"};
  align-items:center;
  justify-content:space-between;
  background:${props => props.backgrond || props.theme.headerBackground};
  div.logoWrapper{
   height:${props => props.height || "48px"};   
   line-height:${props => props.height || "48px"};
   font-size:22px;
   color:${props => props.color || props.theme.colorWrite};
   background:${props => props.backgrond || props.theme.sideBackground};
   padding:0 22px 0 16px;
  }

`
export const LogoWrapper = styled.div`
   height:${props => props.height || "48px"};   
   line-height:${props => props.height || "48px"};
   font-size:22px;
   color:${props => props.color || props.theme.colorWrite};
   background:${props => props.backgrond || props.theme.background2};
   padding:0 22px 0 16px;
`

export const LogoItem = styled.span`
   display:inlie-block;
   font-size:20px;
   vertical-align:middle;
   margin-right:16px;
   cursor:pointer;
   &:last-of-type{
    margin-right:0;
   }
`


export const UserWrapper = styled.div`
   height:${props => props.height || "48px"};   
   line-height:${props => props.height || "48px"};
   font-size:font-size:14px;
   color:${props => props.color || props.theme.color1};
   cursor:pointer;
  }
`


export const UserImg = styled.span`
   display:inline-block;
   vertical-align:middle;
   width:28px;
   height:28px;
   background:#fff;
   border-radius:50%;
   border:1px solid #707070;
   overflow:hidden;
   margin-right:10px;
   img{
     display:block;
     width:100%;
   }
`


export const IconContanier = styled.span`
  display:inline-block;
  vertical-align:middle;
  margin-right:10px;
  position:relative;
  &:hover{
   color:${props => props.hoverColor || props.theme.colorOrger}
 }
 b{
   background:${props => props.background || props.theme.background1};
   color:${props => props.color || props.theme.colorWrite}
 }
`