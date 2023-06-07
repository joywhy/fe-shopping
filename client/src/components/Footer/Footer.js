import React from 'react';
import { Container } from './Footer.styled';

const Footer = () => {
  return (
    <Container>
      <p>개인정보 처리방침 | 이용 약관</p>
      {/* 기본적으로 p 태그는 블럭요소인데 디폴트 너비값이 부모너비의 100%가 아니라 해당 text 영역만큼만 차지할까 */}
      <p>All rights reserved @ Codestates</p>
    </Container>
  );
};

export default Footer;
