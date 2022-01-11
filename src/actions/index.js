// Coloque aqui suas actions
export const USER_DATA = 'USER_DATA';

export const userData = (payload) => (
  {
    type: USER_DATA, payload,
  }
);
