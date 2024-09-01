import { all, call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchTodosSuccess, fetchTodosFailure } from './actions';
import { fetchUsersSuccess, fetchUsersFailure } from './actions';
import { fetchCommentsSuccess, fetchCommentsFailure } from './actions';

function* fetchTodosSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/todos');
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* fetchCommentsSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:3001/comments');
    yield put(fetchCommentsSuccess(response.data));
  } catch (error) {
    yield put(fetchCommentsFailure(error.message));
  }
}

function* fetchAllDataSaga() {
  yield all([fetchTodosSaga(), fetchUsersSaga(), fetchCommentsSaga()]);
}

export default function* rootSaga() {
  yield takeEvery('FETCH_ALL_DATA_REQUEST', fetchAllDataSaga);
}
