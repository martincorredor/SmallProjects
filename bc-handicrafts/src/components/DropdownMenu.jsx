import React from 'react';

const DropdownMenu = (props) => {
  return (
    <div className="drop_menu" id="drop-menu">
      <ul className="drop_list">
        <li className="drop_item">
          <a href="#home" className="drop_link">
            <i className="uil uil-estate drop_icon"></i> Home
          </a>
        </li>
        <li className="drop_item">
          <a href="#about" className="drop_link">
            <i className="uil uil-user drop_icon"></i> About
          </a>
        </li>
        <li className="drop_item">
          <a href="#shop" className="drop_link">
            <i className="uil uil-shopping-cart drop_icon"></i> Shop
          </a>
        </li>
        <li className="drop_item">
          <a href="#comments" className="drop_link">
            <i className="uil uil-comments-alt drop_icon"></i> Comments
          </a>
        </li>
        <li className="drop_item">
          <a href="#session" className="drop_link">
            <i className="uil uil-user drop_icon"></i> Session
          </a>
        </li>
      </ul>
      <i className="uil uil-times drop_close" id="drop-close" onClick={props.hideMenu}></i>
    </div>
  );
};

export default DropdownMenu;
