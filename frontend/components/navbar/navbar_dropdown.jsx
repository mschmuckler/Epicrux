import React from 'react';
import { Link } from 'react-router-dom';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class NavbarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(e) {
    e.preventDefault();
    this.setState({
      open: true,
      anchorEl: e.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div id="navbar-dropdown-menu" >
        <img
          id="navbar-dropdown-icon"
          src={ window.staticImages.menuIcon }
          onClick={ this.handleTouchTap } />
        <Popover
          open={ this.state.open }
          anchorEl={ this.state.anchorEl }
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={ this.handleRequestClose } >
          <Menu style={{ "backgroundColor": "#7b1fa2" }}>
            <Link to="/seizures" >
              <MenuItem
                primaryText="Seizures"
                onClick={ this.handleRequestClose }
                style={{ "color": "white" }} />
            </Link>
            <MenuItem primaryText="Medications" style={{ "color": "white" }} />
            <MenuItem primaryText="Procedures" style={{ "color": "white" }} />
            <MenuItem primaryText="VNS Neuro" style={{ "color": "white" }} />
            <MenuItem
              primaryText="Logout"
              onClick={ this.props.logout }
              style={{ "color": "white" }} />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default NavbarDropdown;
