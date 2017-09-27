import React from 'react';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  render() {
    return (
      <div id="auth-form" >
        <form>
          <label>Username
            <input
              placeholder="Username"
              value={ this.state.username }
              onChange={ this.handleChange('username') }
              type="text"
            />
          </label>
          <label>Password
            <input
              placeholder="Password"
              value={ this.state.password }
              onChange={ this.handleChange('password') }
              type="password"
            />
          </label>
          <input onClick={ this.handleSubmit }
            type="submit"
            value={ this.props.formType }
          />
        </form>
      </div>
    );
  }
}

export default AuthForm;
