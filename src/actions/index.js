const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const GET_RATES = 'GET_RATES';
export const RATES = createRequestTypes('RATES');
export const CHANGE_BASE = 'CHANGE_BASE';
export const BASE_RATE = createRequestTypes('BASE_RATE');
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const EXCHANGE_RATES = createRequestTypes('EXCHANGE_RATES');

function action(type, payload = {}) {
  return { type, ...payload };
}

export const rates = {
  request: () => action(RATES[REQUEST]),
  success: response => action(RATES[SUCCESS], { response }),
  failure: error => action(RATES[FAILURE], { error })
};
export const baseRate = {
  request: base => action(BASE_RATE[REQUEST], { base }),
  success: response => action(BASE_RATE[SUCCESS], { response }),
  failure: error => action(BASE_RATE[FAILURE], { error })
};

export const getRates = () => ({
  type: GET_RATES
});
export const changeBase = base => ({
  type: CHANGE_BASE,
  payload: base
});
export const getExchange = base => ({
  type: GET_EXCHANGE,
  payload: base
});
