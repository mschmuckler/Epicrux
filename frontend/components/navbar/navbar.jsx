import React from 'react';

const Navbar = (props) => {
  return (
    <nav id="navbar" >
      <img
        id="epicrux-logo"
        src={ window.staticImages.epicruxLogo } />
      <div>
        <button>Seizures</button>
        <button>Medications</button>
        <button>Procedures</button>
        <button>VNS Neuro</button>
        <button onClick={ props.logout } >Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
