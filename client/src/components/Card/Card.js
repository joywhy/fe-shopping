import React from 'react';
import styled from 'styled-components';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';

const Container = styled.div`
  width: 264px;
  height: 210px;
  border-radius: 12px;
  border: 1px solid red;
`;

const Card = (props) => {
  return (
    <Container>
      card
      <BookmarkIcon isMarked={true} />
    </Container>
  );
};

export default Card;
