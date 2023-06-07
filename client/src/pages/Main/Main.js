import React from 'react';
import BookmarkIcon from '../../components/BookmarkIcon/BookmarkIcon';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 600px;
`;
const Main = () => {
  return (
    <Container>
      main
      <BookmarkIcon isMarked={true} />
    </Container>
  );
};

export default Main;
