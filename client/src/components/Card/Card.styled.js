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
  //border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  cursor: pointer;
`;
// export const Star = styled(BookmarkIcon)`
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   height: fit-content;
//   border: 1px solid red;
// `;

export const TextBox = styled.div`
  width: 100%;
  height: auto;
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
