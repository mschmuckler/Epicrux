import React from 'react';
import { Link } from 'react-router-dom';
import NavbarDropdown from './navbar_dropdown';

const Navbar = (props) => {
  return (
    <nav id="navbar" >
      <div id="navbar-logo-and-text">
        <img
          id="epicrux-logo"
          src={ window.staticImages.epicruxLogo }
        />
        <p style={{ marginTop: "-6px" }}>Home</p>
      </div>
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
