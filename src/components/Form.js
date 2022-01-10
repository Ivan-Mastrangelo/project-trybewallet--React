import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="emailLogin">
          <input
            type="select"
            placeholder="Email"
            name="emailLogin"
            id="emailInput"
            data-testid="email-input"
          />
        </label>
      </form>
    );
  }
}
