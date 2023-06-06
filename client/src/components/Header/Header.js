import React, { useState, useRef } from 'react';

import logo from '../../common/image/logo.svg';
import hamburger from '../../common/image/hamburger.svg';
import {
  Container,
  LogoContainer,
  HamBurgerContainer,
  Hamburger,
} from './Header.styled';
import Dropdown from './Dropdown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  //const hamburgerRef = useRef(null);

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="로고" />
        <h1>Coz shopping</h1>
      </LogoContainer>

      <HamBurgerContainer>
        <Hamburger
          src={hamburger}
          alt="햄버거 버튼"
          //ref={hamburgerRef}
          onClick={dropdownHandler}
        />
        {isOpen ? <Dropdown /> : null}
      </HamBurgerContainer>
    </Container>
  );
};

export default Header;
