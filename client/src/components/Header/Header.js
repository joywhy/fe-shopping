import React from 'react';

import logo from '../../common/image/logo.svg';
import hamburger from '../../common/image/hamburger.svg';
import { Container, LogoContainer } from './Header.styled';
const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="로고" />
        <h1>Coz shopping</h1>
      </LogoContainer>
      <div>
        <img src={hamburger} alt="햄버거 버튼" />
      </div>
    </Container>
  );
};

export default Header;
