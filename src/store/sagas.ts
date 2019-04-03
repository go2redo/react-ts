import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_DATA,
  GET_DATA_SUCCESS,
  POST_DATA,
  POST_DATA_SUCCESS,
  PUT_DATA,
  PATCH_DATA,
  DELETE_DATA,
} from './constants';

import { get, post } from '../api';

function* fetchData(action: any) {
  try {
    const data = yield call(() => {
      return get('http://localhost:4000/todos');
    });
    yield put({
      type: GET_DATA_SUCCESS,
      payload: data,
    });
  } catch (e) {
  } finally {
  }
}

function* postData(action: any) {
  try {
    yield post('http://localhost:4000/todos', action.payload);
    yield put({
      type: GET_DATA,
    });
  } catch (e) {
  } finally {
  }
}

function* getData() {
  yield takeEvery(GET_DATA, fetchData);
  yield takeEvery(POST_DATA, postData);
}

export { getData };
