import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
/*   constructor() {
    super();
    this.state = {
      // currencies: 'USD',
      // totalExpenses: 0,
    };
  } */

  expensesCalc = () => {
    const { expenses } = this.props;
    const total = expenses.reduce((acc, { value, currency, exchangeRates }) => {
      acc += Number(value) * exchangeRates[currency].ask;
      return acc;
    }, 0).toFixed(2);
    return total;
  }

  render() {
    const { email } = this.props;
    return (
      <>
        <div>
          <h4>User:</h4>
          <span data-testid="email-field">{email}</span>
        </div>
        <div>
          <h4>Total de gastos</h4>
          <span data-testid="total-field">{this.expensesCalc()}</span>
          <h4 data-testid="header-currency-field">
            {}
            :BRL
          </h4>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  currencyAbbr: state.wallet.currencies,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
