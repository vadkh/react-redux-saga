import { put, takeLatest, all, call, select } from 'redux-saga/effects';

import { callApi } from '../services/api';
import { GET_RATES, CHANGE_BASE, rates, baseRate } from '../actions';

function* fetchEntity(entity, apiFn = callApi) {
  yield put(entity.request());
  const { response, error } = yield call(apiFn);
  if (response) yield put(entity.success(response));
  else yield put(entity.failure(error));
}

const getBase = state => state.base;

function* getRates() {
  yield fetchEntity(rates);
}

function* changeBase({ payload }) {
  const apiFn = () => callApi(`?base=${payload}`);
  yield fetchEntity(baseRate, apiFn);
}

function* exchangeRates({ payload }) {
  const base = yield select(getBase);
  const apiFn = () => callApi(`?symbols=${base},${payload}`);
  yield fetchEntity(rates, apiFn);
}

// Watchers

function* getRatesWatcher() {
  yield takeLatest(GET_RATES, getRates);
}
function* changeBaseWatcher() {
  yield takeLatest(CHANGE_BASE, changeBase);
}

export default function* rootSaga() {
  yield all([getRatesWatcher(), changeBaseWatcher()]);
}
