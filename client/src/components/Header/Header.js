import React from 'react';
import Hamburger from '../../common/image/Hamburger';
import logo from '../../common/image/original/logo.svg';
const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="로고" />
        <h1>Coz shopping</h1>
      </div>
      <div>
        <Hamburger />
        <img src="" alt="햄버거 버튼" />
      </div>
    </div>
  );
};

export default Header;
