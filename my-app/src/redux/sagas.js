import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTodosSuccess, fetchTodosFailure } from './actions';

function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/todos');
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodosSaga);
}