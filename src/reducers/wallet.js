import { WALLET_DATA_EXPENSES, REQUEST_API } from '../actions';

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
  default:
    return state;
  }
};

export default wallet;
