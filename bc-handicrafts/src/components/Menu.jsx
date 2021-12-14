import React from 'react';

const Menu = (props) => {
    const printing = () => {
        console.log('funciona')
    }

    const showMenu = () => {
        console.log('boton de la x')
    }

  return (
    <div className="nav_menu" id="nav-menu">
      <ul className="nav_list grid">
        <li className="nav_item">
          <a href="#home" className="nav_link" onClick={printing}>
            <i className="uil uil-estate nav_icon"></i> Home
          </a>
        </li>
        <li className="nav_item">
          <a href="#about" className="nav_link">
            <i className="uil uil-user nav_icon"></i> About
          </a>
        </li>
        <li className="nav_item">
          <a href="#shop" className="nav_link">
            <i className="uil uil-shopping-cart nav_icon"></i> Shop
          </a>
        </li>
        <li className="nav_item">
          <a href="#comments" className="nav_link">
            <i className="uil uil-comments-alt nav_icon"></i> Comments
          </a>
        </li>
        <li className="nav_item">
          <a href="#session" className="nav_link">
            <i className="uil uil-user nav_icon"></i> Session
          </a>
        </li>
      </ul>
      <i className="uil uil-times nav_close" id="nav-close" onClick={props.hideMenu}></i>
    </div>
  );
};

export default Menu;
