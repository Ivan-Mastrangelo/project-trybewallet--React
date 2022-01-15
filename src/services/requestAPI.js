const urlAPI = 'https://economia.awesomeapi.com.br/json/all';

const getExchangeRate = async () => {
  const getCoins = await fetch(urlAPI);
  const response = await getCoins.json();
  return response;
};

export default getExchangeRate;
