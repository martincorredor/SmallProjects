import React from 'react';
import NavLogo from './NavLogo';
import NavToggle from './NavToggle';
import ThemeButton from './ThemeButton';

const MenuMobile = (props) => {
  return (
    <div className="nav_mobile">
      {!props.screens.isLongScreen && <NavLogo/>}
      <ThemeButton/>
      {!props.screens.isLongScreen && <NavToggle showMenu={props.showMenu}/>}
      
    </div>
  );
};

export default MenuMobile;
