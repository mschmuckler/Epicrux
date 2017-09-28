import React from 'react';

const Navbar = (props) => {
  return (
    <nav id="navbar" >
      <img id="epicrux-logo" src={ window.staticImages.epicruxLogo } />
      <button onClick={ props.logout } >Logout</button>
    </nav>
  );
};

export default Navbar;
