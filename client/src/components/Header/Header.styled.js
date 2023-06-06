import styled from 'styled-components';
export const Container = styled.div`
  width: var(--main-width);
  height: var(--main-height);

  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  padding: 0 76px;
  //padding: var(--main-padding); //flex 시 padding 먹지 않음? --padding
`;
export const LogoContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  //border: 1px solid red;
`;
