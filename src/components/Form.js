import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestApiThunk, walletDataExpenses } from '../actions';
import getExchangeRate from '../services/requestAPI';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  componentDidMount() {
    const { sendExchangeData } = this.props;
    sendExchangeData();
    // console.log(sendExchangeData());
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
    const { submitForm, sendExchangeData } = this.props;
    submitForm({ ...this.state, exchangeRates: response });
    sendExchangeData();
    this.setState({
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;

    // exchangeRates: mockData,

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
            type="textarea"
            name="description"
            id="spentDescription"
            data-testid="description-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="countryCurrency">
          Moeda:
          <input
            type="text"
            name="currency"
            id="countryCurrency"
            data-testid="currency-input"
            value={ currency }
            onChange={ this.handleChange }
          />
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
            <option value="money">Dinheiro</option>
            <option value="credit card">Cartão de crédito</option>
            <option value="debit card">Cartão de débito</option>
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
            <option value="Food">Alimentação</option>
            <option value="Leisure">Lazer</option>
            <option value="Work">Trabalho</option>
            <option value="Transport">Transporte</option>
            <option value="Health">Saúde</option>
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
  sendExchangeData: () => dispatch(requestApiThunk()),
});

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  submitForm: PropTypes.func.isRequired,
  sendExchangeData: PropTypes.func.isRequired,
  // spentValue: PropTypes.number.isRequired,
  // value: PropTypes.number.isRequired,
  // description: PropTypes.string.isRequired,
  // desc: PropTypes.string.isRequired,
  // currency: PropTypes.string.isRequired,
  // curr: PropTypes.string.isRequired,
  // payType: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  // spentIn: PropTypes.string.isRequired,
  // spent: PropTypes.string.isRequired,
};

// const mapStateToProps = (state) => ({
//   id: state.wallet.id,
//   spentValue: state.wallet.spent,
//   description: state.wallet.description,
//   currency: state.wallet.currency,
//   payType: state.wallet.payType,
//   spentIn: state.wallet.spentIn,
// });
