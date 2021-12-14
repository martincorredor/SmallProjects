import React, { useState } from 'react';
import Buttons from './Buttons';
import Menu from './Menu';

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
      <nav className="nav">
          {navMenu ? <Menu hideMenu={hideMenu}/> : <Buttons showMenu={showMenu} /> }
      </nav> 
    </header>
  );
};

export default Header;
