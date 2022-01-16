import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletDataExpenses, requestCurrencyAbbThunk } from '../actions';
import getExchangeRate from '../services/requestAPI';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '`Alimentação`',
    };
  }

  componentDidMount() {
    const { currencyAbbreviations } = this.props;
    // const { expenses } = this.props;

    // submitForm(this.state);
    currencyAbbreviations();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  expenseSubmit = async (ev) => {
    ev.preventDefault();
    const response = await getExchangeRate();
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const { submitForm } = this.props;
    submitForm({ ...this.state, exchangeRates: response });
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencyAbbr } = this.props;

    return (
      <form>
        <h3>Login</h3>
        <label htmlFor="newSpent">
          Valor da despesa:
          <input
            type="number"
            name="value"
            placeholder="0,00"
            id="newSpent"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="spentDescription">
          Descrição:
          <input
            type="text"
            name="description"
            id="spentDescription"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="countryCurrency">
          Moeda:
          <select
            type="text"
            name="currency"
            id="countryCurrency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
            sele
          >
            {
              currencyAbbr.map((element) => (
                <option
                  key={ element }
                  value={ element }
                  data-testid={ element }
                >
                  { element }
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="paymentForm">
          Forma de pagamento:
          <select
            name="method"
            id="paymentForm"
            data-testid="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="expenseType">
          Despesa em:
          <select
            name="tag"
            id="expenseType"
            data-testid="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="submit"
          onClick={ this.expenseSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitForm: (data) => dispatch(walletDataExpenses(data)),
  // sendExchangeData: () => dispatch(requestApiThunk()),
  currencyAbbreviations: () => dispatch(requestCurrencyAbbThunk()),
});

const mapStateToProps = (state) => ({
  currencyAbbr: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  submitForm: PropTypes.func.isRequired,
  currencyAbbr: PropTypes.arrayOf(PropTypes.any).isRequired,
  currencyAbbreviations: PropTypes.func.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
