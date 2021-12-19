import React from 'react';

const NavToggle = (props) => {
  return (
    <div className="nav_toggle" id="nav-toggle">
      <i className="uil uil-apps" onClick={props.showMenu}></i>
    </div>
  );
};


export default NavToggle