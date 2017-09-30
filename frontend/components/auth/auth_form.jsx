import React from 'react';
import { Link } from 'react-router-dom';

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
    this.generateErrorMessages = this.generateErrorMessages.bind(this);
  }

  generateAuthLink() {
    if (this.props.formType === "Login") {
      return <Link to="/signup" >Don't have an account yet? Go to Signup</Link>;
    } else {
      return <Link to="/login" >Already have an account? Go to Login</Link>;
    }
  }

  generateErrorMessages() {
    let errorMessages;
    if (this.props.errors) {
      errorMessages = this.props.errors.responseJSON.map((error, idx) => {
        return <li key={ idx } className="error-message" >{ error }</li>;
      });
    }
    return errorMessages;
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
          <ul>
            { this.generateErrorMessages() }
          </ul>
        </form>
      </div>
    );
  }
}

export default AuthForm;
