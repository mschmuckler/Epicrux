import { connect } from 'react-redux';
import { logout } from '../../actions/auth_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
