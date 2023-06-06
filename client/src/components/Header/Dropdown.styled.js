import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50px;
  right: -70px;
  //border: 1px solid red;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
`;
export const Triangle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;

  width: 0;
  height: 0;
  border-bottom: 18px solid white;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
`;

export const DropUl = styled.ul`
  //리셋이 안되서 직접함 왜 안된느지는 몰루
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;
  background-color: white;
  border-radius: 12px;

  > li {
    display: flex;
    width: 180px;
    height: 25px;
    font-size: 16px;
    line-height: 25px;
    margin: 10px 13px;
    //  border: 1px solid red;
  }
`;
