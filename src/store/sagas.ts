import { put, takeEvery } from 'redux-saga/effects';

import {
  GET_DATA,
  GET_DATA_SUCCESS,
  POST_DATA,
  PUT_DATA,
  PATCH_DATA,
  DELETE_DATA,
} from './constants';

import { get } from '../api';

function* fetchData(action: any) {
  try {
    const data = yield get('https://jsonplaceholder.typicode.com/posts');
    yield put({
      type: GET_DATA_SUCCESS,
      payload: data,
    });
  } catch (e) {
  } finally {
  }
}

function* getData() {
  yield takeEvery(GET_DATA, fetchData);
}

export { getData };
