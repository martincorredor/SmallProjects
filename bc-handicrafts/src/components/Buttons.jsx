import React from 'react';

const Buttons = (props) => {
  return (
    <div className="nav_mobile">
      <a href="#home" className="nav_logo">
        BC Handicrafts
      </a>
      <div className="nav_btns">
        <i className="uil uil-moon change_theme" id="theme-button"></i>
        <div className="nav_toggle" id="nav-toggle">
          <i className="uil uil-apps" onClick={props.showMenu}></i>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
