import {
  WALLET_DATA_EXPENSES,
  REQUEST_API,
  REQUEST_CURRENCY_ABBREVIATIONS,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_DATA_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case REQUEST_API:
    return {
      ...state,
      exchangeRates: action.payload,
    };
  case REQUEST_CURRENCY_ABBREVIATIONS:
    return {
      ...state,
      currencies: Object.keys(action.payload), // Solução vista na mentoria summer do mentor Paulo Sordi em auxílio à aluna Gabriele Castro(ela escreveu esta linha de código).
    };
  default:
    return state;
  }
};

export default wallet;
