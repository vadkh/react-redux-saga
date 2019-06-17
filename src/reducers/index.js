import { RATES, BASE_RATE } from '../actions';

const initialState = {
  rates: {},
  base: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RATES.REQUEST:
    case BASE_RATE.REQUEST:
      return { ...state, loading: true };

    case RATES.SUCCESS:
    case BASE_RATE.SUCCESS:
      const { response = {} } = action;
      return {
        ...state,
        rates: response.rates,
        base: response.base,
        loading: false,
        error: ''
      };

    case RATES.FAILURE:
    case BASE_RATE.FAILURE:
      const { error } = action;
      return { ...state, error, loading: false };

    default:
      return state;
  }
};

export default reducer;
