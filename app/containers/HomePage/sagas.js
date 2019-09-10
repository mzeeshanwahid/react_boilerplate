import { put, takeLatest } from 'redux-saga/effects';
import { REQUEST_API_DATA } from './constants';
import { getAPIData } from './actions';

const processRequest = async url => {
  const data = await fetch(url);
  return data.json();
};

function* getTodos() {
  const data = yield processRequest(
    'https://jsonplaceholder.typicode.com/todos?userId=1',
  );
  yield put(getAPIData(data));
}

export default function* getAPIDataSaga() {
  yield takeLatest(REQUEST_API_DATA, getTodos);
}
