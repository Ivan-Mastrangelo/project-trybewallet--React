import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: 'USD',
      // totalExpenses: 0,
    };
    this.expensesCalc = this.expensesCalc.bind(this);
  }

  // expensesCalc = () => {
  //   const { expenses } = this.props;
  //   const total = expenses
  //     .reducer((acc, { value, currency, exchangeRates }) => {
  //       const { ask } = exchangeRates[currency];
  //       console.log(ask, currency, value);
  //       const valueNum = Number(value);
  //       const askNumber = Number(ask);
  //       acc += valueNum * askNumber;
  //       return acc;
  //     }, 0);
  //   return total;
  // };

  expensesCalc() {
    const { expenses } = this.props;
    // const { exchangeRates } = expenses;
    // console.log(expenses);
    const total = expenses.reduce((acc, item) => {
      acc += Number(item.value); // * Number(item.exchangeRates[currency].ask);
      return acc;
    }, 0);
    return total;
  }

  render() {
    const { email } = this.props;
    const { currencies } = this.state;
    // console.log(expenses);
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
  expenses: state.wallet.expenses,
  currencyAbbr: state.wallet.currencies,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);

// comentário para correção da descrição do commit.
