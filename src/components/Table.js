import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        <tbody>
          {
            expenses.map((element) => (
              <tr key={ element.id }>
                <td>
                  { element.description }
                </td>
                <td>
                  { element.tag }
                </td>
                <td>
                  { element.method }
                </td>
                <td>
                  { element.value }
                </td>
                <td>
                  { Number(element.exchangeRates[element.currency]
                    .ask).toFixed(2) }
                </td>
                <td>
                  { element.exchangeRates[element.currency].name }
                </td>
                <td>
                  { Number(element.exchangeRates[element.currency]
                    .ask) * Number(element.value)}
                </td>
                <td>
                  { element.currency }
                </td>
                <td>
                  Real
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
