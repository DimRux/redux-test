import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import axios from 'axios';
import { fetchTodosSuccess, fetchTodosFailure } from './actions';

const fetchTodosEpic = (action$) =>
  action$.pipe(
    ofType('FETCH_TODOS_REQUEST'),
    mergeMap(() =>
      axios.get('http://localhost:3001/todos').then(
        (response) => fetchTodosSuccess(response.data),
        (error) => fetchTodosFailure(error.message)
      )
    ),
    catchError((error) => of(fetchTodosFailure(error.message)))
  );

export const rootEpic = combineEpics(fetchTodosEpic);