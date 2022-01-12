import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: 'USD',
      expenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { currencies, expenses } = this.state;
    return (
      <>
        <div>
          <h4>User:</h4>
          <span data-testid="email-field">{email}</span>
        </div>
        <div>
          <h4>Total de gastos</h4>
          <span data-testid="total-field">{expenses}</span>
          <h4 data-testid="header-currency-field">
            {currencies}
            :BRL
          </h4>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

// comentário para correção da descrição do commit.
