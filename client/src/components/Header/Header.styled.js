import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; //var(--main-width)
  height: 80px; //var(--main-height)
  position: sticky;
  z-index: 1;

  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 76px;
  background-color: white; //var(--white)
  border: 1px solid rebeccapurple;
  //padding: var(--main-padding); //flex 시 padding 먹지 않음? --padding
`;
export const LogoContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  img {
    width: 55px;
    gap: 12px;
  }
  h1 {
    font-size: 32px;
    font-weight: 700;
    margin: auto;
  }
`;

export const HamBurgerContainer = styled.div`
  width: fit-content;
  height: 100%;
  position: relative;
  display: flex; //엡솔루투 무시하나?
`;
export const Hamburger = styled.img`
  width: 30px;
  display: block;
  cursor: pointer;
`;
