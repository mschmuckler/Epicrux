import React from 'react';

const Navbar = (props) => {
  return (
    <nav id="navbar" >
      <img id="epicrux-logo" href="app/assets/images/epicrux-logo.png" />
      <button onClick={ props.logout } >Logout</button>
    </nav>
  );
};

export default Navbar;
