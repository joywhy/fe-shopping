import React from 'react';
import logo from '../../common/image/logo.svg';
import hamburger from '../../common/image/hamburger.svg';
const Header = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="로고" />
        <h1>Coz shopping</h1>
      </div>
      <div>
        <img src={hamburger} alt="햄버거 버튼" />
      </div>
    </div>
  );
};

export default Header;
