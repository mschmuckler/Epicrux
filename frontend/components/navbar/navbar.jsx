import React from 'react';

const Navbar = (props) => {
  return (
    <nav id="navbar" className="container" >
      <div id="navbar-row" className="row" >
        <img
          id="epicrux-logo"
          className="col-xs-3"
          src={ window.staticImages.epicruxLogo } />
        <button className="col-xs-2 btn-default" onClick={ props.logout } >Seizures</button>
        <button className="col-xs-2" onClick={ props.logout } >Medications</button>
        <button className="col-xs-2" onClick={ props.logout } >Procedures</button>
        <button className="col-xs-1" onClick={ props.logout } >VNS Neuro</button>
        <button className="col-xs-1" onClick={ props.logout } >Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
