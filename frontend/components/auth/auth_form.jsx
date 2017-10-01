import React from 'react';
import { Link } from 'react-router-dom';
import { generateErrorMessages } from '../../util/error_message_util';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateAuthLink = this.generateAuthLink.bind(this);
  }

  generateAuthLink() {
    if (this.props.formType === "Login") {
      return <Link to="/signup" >Don't have an account yet? Go to Signup</Link>;
    } else {
      return <Link to="/login" >Already have an account? Go to Login</Link>;
    }
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = { user: Object.assign({}, this.state) };
    this.props.processForm(user);
  }

  render() {
    return (
      <div id="auth-form" >
        <form>
          <input
            placeholder="Username"
            value={ this.state.username }
            onChange={ this.handleChange('username') }
            type="text"
          />
          <input
            placeholder="Password"
            value={ this.state.password }
            onChange={ this.handleChange('password') }
            type="password"
          />
          <button onClick={ this.handleSubmit }
            type="submit"
            value={ this.props.formType }
          >{ this.props.formType }</button>
          { this.generateAuthLink() }
          { generateErrorMessages(this.props.errors) }
        </form>
      </div>
    );
  }
}

export default AuthForm;
