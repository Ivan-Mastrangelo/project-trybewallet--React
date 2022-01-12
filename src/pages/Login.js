import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userData } from '../actions';

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
    const checkEmail = /\S+@\S+\.\S+/; // metodo retirado do site https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
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

  userSubmit = (ev) => {
    ev.preventDefault();
    const { dispatchSetValue, history } = this.props;
    dispatchSetValue(this.state);
    history.push('/carteira'); // feature do history.push realizada com ajuda de Joel Almeida
  }

  render() {
    const { isBtnDisabled, email, password } = this.state;
    const { handleChange, userSubmit } = this;

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
          onClick={ userSubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (userEmail) => dispatch(userData(userEmail)),
});

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
