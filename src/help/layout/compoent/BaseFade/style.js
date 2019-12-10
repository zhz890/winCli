import styled from "styled-components"
export const Contanier = styled.div`
position:absolute;
left:${props => props.left || 0};
top:0;
height:100%;
width:${props => props.width || "70px"};
background:${props => props.background || props.theme.sideBackground};
transform: translateX(-200%);
z-index:2;
&.fade-enter{
  transform: translateX(-200%);
}
&.fade-enter-active{
   transform: translateX(0);
   transition:all ${props => props.time || ".6s"};
}

&.fade-enter-done{
  transform: translateX(0);
}
&.fade-exit{
  transform: translateX(0);
}
&.fade-exit-active{
   transform: translateX(-200%);
   transition:all ${props => props.time || ".6s"};
}

&.fade-exit-done{
  transform: translateX(-200%);
}

}
`
