import React from 'react';
import BookmarkIcon from '../../components/BookmarkIcon/BookmarkIcon';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
const Container = styled.div`
  width: 100%;
  height: 600px;
`;
const Main = () => {
  return (
    <Container>
      main
      <Card />
      <BookmarkIcon isMarked={true} />
    </Container>
  );
};

export default Main;
