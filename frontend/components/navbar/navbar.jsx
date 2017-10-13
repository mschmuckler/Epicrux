import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './navbar_dropdown';

const Navbar = (props) => {
  return (
    <nav id="navbar" >
      <img
        id="epicrux-logo"
        src={ window.staticImages.epicruxLogo } />
      <div id="navbar-items" >
        <Link to="/seizures" >
          <button>Seizures</button>
        </Link>
        <button>Medications</button>
        <button>Procedures</button>
        <button>VNS Neuro</button>
        <button onClick={ props.logout } >Logout</button>
      </div>
      <div id="navbar-dropdown" >
        <NavbarDropdown logout={ props.logout } />
      </div>
    </nav>
  );
};

export default Navbar;
