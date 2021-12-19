import React, { useState } from 'react';
import MenuMobile from './MenuMobile';
import DropdownMenu from './DropdownMenu';
import NavMenu from './NavMenu';

const Header = (props) => {
  const [navMenu, setNavMenu] = useState(false);

  const showMenu = () => {
    setNavMenu(true);
  };
  const hideMenu = () => {
    setNavMenu(false);
  };

  return (
    <header className="header" id="header">
      {props.screens.isLongScreen && <NavMenu />}
      {navMenu ? (
        <DropdownMenu hideMenu={hideMenu} />
      ) : (
        <MenuMobile showMenu={showMenu} screens={props.screens} />
      )}
    </header>
  );
};

export default Header;
