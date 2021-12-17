import React, { useState } from 'react';
import Buttons from './Buttons';
import DropdownMenu from './DropdownMenu';
import NavMenu from './NavMenu';

const Header = (props) => {
  const [navMenu, setNavMenu] = useState(false)

  const showMenu = () =>{
    setNavMenu(true)
  }
  const hideMenu = () => {
    setNavMenu(false)
  }

  return (
    <header className="header" id="header" >
      <NavMenu/>
      {navMenu ? <DropdownMenu hideMenu={hideMenu}/> : <Buttons showMenu={showMenu}/> }
      
    </header>
  );
};

export default Header;
