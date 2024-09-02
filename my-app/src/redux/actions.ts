import {
  Todo,
  Users,
  Comments,
  FetchTodosSuccessPayload,
  FetchTodosFailurePayload,
  FetchUsersSuccessPayload,
  FetchUsersFailurePayload,
  FetchCommentsSuccessPayload,
  FetchCommentsFailurePayload,
} from "./types";


export const fetchTodosRequest = (): { type: 'FETCH_TODOS_REQUEST' } => ({ type: 'FETCH_TODOS_REQUEST' });
export const fetchTodosSuccess = (todos: Todo[]): FetchTodosSuccessPayload => ({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
export const fetchTodosFailure = (error: string): FetchTodosFailurePayload => ({ type: 'FETCH_TODOS_FAILURE', payload: error });

export const fetchUsersRequest = (): { type: 'FETCH_USERS_REQUEST' } => ({ type: 'FETCH_USERS_REQUEST' });
export const fetchUsersSuccess = (users: Users[]): FetchUsersSuccessPayload => ({ type: 'FETCH_USERS_SUCCESS', payload: users });
export const fetchUsersFailure = (error: string): FetchUsersFailurePayload => ({ type: 'FETCH_USERS_FAILURE', payload: error });

export const fetchCommentsRequest = (): { type: 'FETCH_COMMENTS_REQUEST' } => ({ type: 'FETCH_COMMENTS_REQUEST' });
export const fetchCommentsSuccess = (comments: Comments[]): FetchCommentsSuccessPayload => ({ type: 'FETCH_COMMENTS_SUCCESS', payload: comments });
export const fetchCommentsFailure = (error: string): FetchCommentsFailurePayload => ({ type: 'FETCH_COMMENTS_FAILURE', payload: error });

export const fetchAllDataRequest = (): { type: 'FETCH_ALL_DATA_REQUEST' } => ({ type: 'FETCH_ALL_DATA_REQUEST' });