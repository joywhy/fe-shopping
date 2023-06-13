import styled from 'styled-components';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';

export const Container = styled.div`
  width: 264px;
  height: 264px;

  //border: 1px solid red;
`;
export const ModalBox = styled.div`
  width: 264px;
  height: 210px;
  border-radius: 12px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
  padding: 12px;
`;

export const TextBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 6px;
`;
export const Title = styled.h3`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color: var(--black);
`;
export const SmallTitle = styled(Title)`
  ${(props) => (props.isproduct ? 'color: var(--pointColor);' : null)}
`;
export const DescBox = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: auto;
`;
export const Desc = styled(Title)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  //border: 1px solid red;
  //position: absolute;

  text-align: ${(props) => props.position || 'right'};
`;
