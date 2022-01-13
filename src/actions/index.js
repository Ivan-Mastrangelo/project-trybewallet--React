// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';

export const userData = (payload) => (
  {
    type: USER_DATA, payload,
  }
);

export const WALLET_DATA_CURRENCY = 'WALLET_DATA_CURRENCY';

export const walletDataCurrency = (payload) => (
  {
    type: WALLET_DATA_CURRENCY, payload,
  }
);

export const WALLET_DATA_EXPENSES = 'WALLET_DATA_ESPENSES';

export const walletDataExpenses = (payload) => (
  {
    type: WALLET_DATA_EXPENSES, payload,
  }
);
