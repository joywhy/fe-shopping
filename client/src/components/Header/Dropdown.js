import React from 'react';
import { Link } from 'react-router-dom';

import { Triangle } from './Dropdown.styled';
import productIconUrl from '../../common/image/productIcon.svg';
import bookmarkIconUrl from '../../common/image/bookmarkIcon.svg';
import { Container, DropUl } from './Dropdown.styled';
const Dropdown = () => {
  return (
    <Container>
      <Triangle />
      <DropUl>
        <li>어피치님, 안녕하세요!</li>
        <Link to="/products/list">
          {/* link 태그에 직접적으로 스타일줄수 있나? */}
          <li>
            <img src={productIconUrl} alt="상품리스트아이콘" />
            상품리스트 페이지
          </li>
        </Link>
        <Link to="/bookmark">
          <li>
            <img src={bookmarkIconUrl} alt="북마크아이콘" />
            북마크 페이지
          </li>
        </Link>
      </DropUl>
    </Container>
  );
};

export default Dropdown;
