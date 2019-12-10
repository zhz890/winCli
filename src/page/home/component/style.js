import styled from "styled-components"
/**伪代码为了演示效果**/
export const Contanier = styled.div`
.ant-tabs-nav .ant-tabs-tab{
  color:#fff ;
  background:#353f58;
  margin: 0 1px 0 0;
  padding: 12px 29px;
  
}
.ant-tabs-ink-bar{
  background:#ff900d
}
`

export const TableContanier = styled.div`
.ant-table-wrapper {
    width:98%;
    margin: 0 auto;
}
.ant-table-thead > tr > th{
    background:#68718E
    padding: 8px 16px;
}

.ant-table-tbody > tr > td{
  padding: 6px 16px;
  color:#fff;
   
  &:hover{
    background:#000
  }
}

`