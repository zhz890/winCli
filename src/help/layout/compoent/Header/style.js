import styled from "styled-components";


export const Contanier = styled.div`
  display:flex;
  position: relative;
    z-index: 2;
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
   color:${props => props.hoverColor || props.theme.colorHover}
 }
 b{
   background:${props => props.background || props.theme.colorHover};
   color:${props => props.color || props.theme.colorWrite}
 }
`

export const UserName = styled.span`
display:inline-block;
vertical-align:middle;
span.icon{
  font-size:12px
}

`


export const UserInfo = styled.ul`
position: absolute;
right: 12px;
top: 36px;
background: #1f2640;
border-radius: 4px;
&::after{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px;
  border: 7px solid transparent;
  border-bottom-color: #1f2640;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
}

`

export const UserInfoItem = styled.li`
     padding: 4px 26px;
     color: #fff;
     cursor: pointer;
     &:hover{
      color:${props => props.colorHover || props.theme.colorHover};
    }
`