import styled from "styled-components";

//overflow-y = permite 'scrollar' pela tela
//display: none = permite não possuir barra de scroll


export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(32,34,50);
  padding: 11px 0;
  max-height: 100%;
  overflow-y: scroll; 

  ::-webkit-scrollbar {
    display: none;
  }

`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid #292b2f;

  margin-bottom: 8px;
`

