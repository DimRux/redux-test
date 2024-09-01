import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, catchError } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import axios from 'axios';
import { fetchTodosSuccess, fetchTodosFailure } from './actions';
import { fetchUsersSuccess, fetchUsersFailure } from './actions';
import { fetchCommentsSuccess, fetchCommentsFailure } from './actions';

const fetchTodosEpic = (action$) =>
  action$.pipe(
    ofType('FETCH_TODOS_REQUEST'),
    mergeMap(() =>
      axios.get('http://localhost:3001/todos').then(
        (response) => fetchTodosSuccess(response.data),
        (error) => fetchTodosFailure(error.message)
      )
    )
  );

const fetchUsersEpic = (action$) =>
  action$.pipe(
    ofType('FETCH_USERS_REQUEST'),
    mergeMap(() =>
      axios.get('http://localhost:3001/users').then(
        (response) => fetchUsersSuccess(response.data),
        (error) => fetchUsersFailure(error.message)
      )
    )
  );

const fetchCommentsEpic = (action$) =>
  action$.pipe(
    ofType('FETCH_COMMENTS_REQUEST'),
    mergeMap(() =>
      axios.get('http://localhost:3001/comments').then(
        (response) => fetchCommentsSuccess(response.data),
        (error) => fetchCommentsFailure(error.message)
      )
    )
  );

const fetchAllDataEpic = (action$) =>
  action$.pipe(
    ofType('FETCH_ALL_DATA_REQUEST'),
    mergeMap(() =>
      forkJoin([
        axios.get('http://localhost:3001/todos'),
        axios.get('http://localhost:3001/users'),
        axios.get('http://localhost:3001/comments')
      ]).pipe(
        mergeMap(([todosResponse, usersResponse, commentsResponse]) => [
          fetchTodosSuccess(todosResponse.data),
          fetchUsersSuccess(usersResponse.data),
          fetchCommentsSuccess(commentsResponse.data)
        ]),
        catchError((error) => of(fetchTodosFailure(error.message)))
      )
    )
  );

export const rootEpic = combineEpics(fetchTodosEpic, fetchUsersEpic, fetchCommentsEpic, fetchAllDataEpic);
