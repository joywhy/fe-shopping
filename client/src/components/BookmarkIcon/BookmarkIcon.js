import React, { useState } from 'react';
import starOnUrl from '../../common/image/starOn.png';
import starOffUrl from '../../common/image/starOff.png';

import { Container } from './BookmarkIcon.styled';

const BookmarkIcon = ({ isMarked }) => {
  const [isOpen, setIsOpen] = useState(isMarked); //그후에는 리덕스 상태관리로 관리

  const BookmarkHandler = () => {
    console.log('동작');
    setIsOpen(!isOpen);
  };

  return (
    <Container onClick={BookmarkHandler}>
      {isOpen ? (
        <img src={starOnUrl} alt="북마크아이콘" />
      ) : (
        <img src={starOffUrl} alt="북마크아이콘" />
      )}
    </Container>
  );
};

export default BookmarkIcon;
