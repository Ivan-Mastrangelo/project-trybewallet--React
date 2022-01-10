import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <h3>Login</h3>
        <label htmlFor="emailLogin">
          <input
            type="select"
            placeholder="Email"
            id="emailLogin"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="passwordLogin">
          <input
            type="password"
            id="passwordLogin"
            placeholder="password"
            data-testid="password-input"
          />
        </label>
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}
