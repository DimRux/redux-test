import { all, call, put, takeEvery, CallEffect, PutEffect, AllEffect, ForkEffect } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { fetchTodosSuccess, fetchTodosFailure } from './actions';
import { fetchUsersSuccess, fetchUsersFailure } from './actions';
import { fetchCommentsSuccess, fetchCommentsFailure } from './actions';
import { actionUsers, actionComments, actionTodos, ActionAll } from './types';

function* fetchTodosSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'http://localhost:3001/todos');
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchTodosFailure(error.message));
    }
  }
}

function* fetchUsersSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'http://localhost:3001/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchUsersFailure(error.message));
    }
  }
}

function* fetchCommentsSaga() {
  try {
    const response: AxiosResponse = yield call(axios.get, 'http://localhost:3001/comments');
    yield put(fetchCommentsSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchCommentsFailure(error.message));
    }
  }
}

function* fetchAllDataSaga() {
  yield all([fetchTodosSaga(), fetchUsersSaga(), fetchCommentsSaga()]);
}

export default function* rootSaga() {
  yield takeEvery('FETCH_ALL_DATA_REQUEST', fetchAllDataSaga);
}
