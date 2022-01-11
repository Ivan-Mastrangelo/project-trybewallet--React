import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.enableBtn());
  }

  enableBtn = () => {
    const { email, password } = this.state;
    const numberOfCharacters = 6;
    const checkEmail = /\S+@\S+\.\S+/;
    const emailCondition = checkEmail.test(email);
    if (emailCondition === true && password.length >= numberOfCharacters) {
      this.setState({
        isBtnDisabled: false,
      });
    } else {
      this.setState({
        isBtnDisabled: true,
      });
    }
  }

  render() {
    const { isBtnDisabled, email, password } = this.state;
    const { handleChange } = this;
    return (
      <form>
        <h3>Login</h3>
        <label htmlFor="emailLogin">
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="emailLogin"
            data-testid="email-input"
            value={ email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="passwordLogin">
          <input
            type="password"
            name="password"
            id="passwordLogin"
            placeholder="password"
            data-testid="password-input"
            value={ password }
            onChange={ handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ isBtnDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
