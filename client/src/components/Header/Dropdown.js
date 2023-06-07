import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Triangle } from './Dropdown.styled';
import productIconUrl from '../../common/image/productIcon.svg';
import bookmarkIconUrl from '../../common/image/bookmarkIcon.svg';
import { Container, DropUl } from './Dropdown.styled';

const Dropdown = ({ dropdownHandler, hamburgerRef }) => {
  const modalRef = useRef(null);
  //드롭다운을 클릭했을 때 ->꺼짐 isOpen False
  //드롭다운 아닌곳을 클릭했을하고 isopen 이 true일 때 -> isOpen False

  useEffect(() => {
    const handler = (e) => {
      if (
        !modalRef.current.contains(e.target) && //이해
        !hamburgerRef.current.contains(e.target) //이해 필요
      ) {
        dropdownHandler();
      }
    };

    document.addEventListener('mousedown', handler); //이해

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <Container ref={modalRef}>
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
