// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';

export const userData = (payload) => (
  {
    type: USER_DATA, payload,
  }
);

export const WALLET_DATA = 'WALLET_DATA';

export const walletData = (payload) => (
  {
    type: WALLET_DATA, payload,
  }
);
