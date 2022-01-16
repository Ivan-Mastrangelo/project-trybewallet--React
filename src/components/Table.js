import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>Descrição</th>
          <th scope="col">Tag</th>
          <th scope="col">Método de pagamento</th>
          <th scope="col">Valor</th>
          <th scope="col">Moeda</th>
          <th scope="col">Câmbio utilizado</th>
          <th scope="col">Valor convertido</th>
          <th scope="col">Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        {/* <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
          </tr>
        </tbody> */}
      </table>
    );
  }
}

export default Table;
