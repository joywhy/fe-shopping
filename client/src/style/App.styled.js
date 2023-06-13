import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  grid-template-columns: 76px 1fr 76px; //var(--main-padding)
  //grid-template-columns: var(--main-padding) 1fr var(--main-padding); //var(--main-padding)
`;

export const MainContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  border: 1px solid red;
  padding-top: 24px;
`;
