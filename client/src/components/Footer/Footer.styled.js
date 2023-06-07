import styled from 'styled-components';
export const Container = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;

  width: 100%;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center; //콜론일때는 좌우가 바뀜
  align-items: center;
  background-color: var(--white);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  p {
    color: var(--gray-50);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }
`;
