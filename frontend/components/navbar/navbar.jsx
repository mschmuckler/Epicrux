import React from 'react';

const Navbar = (props) => {
  return (
    <div>
      <button onClick={ props.logout } >Logout</button>
    </div>
  );
};

export default Navbar;
