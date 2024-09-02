// action

import { fetchAllDataRequest } from "./actions";

export interface Todo {
  id: number,
  title: string,
  completed: boolean,
}

export interface Users {
  id: number,
  name: string,
}

export interface Comments {
  id: number,
  todoId: number,
  content: string,
}

export interface FetchTodosRequestPayload {
  type: 'FETCH_TODOS_REQUEST',
  loading: true,
  error: null,
}

export interface FetchTodosSuccessPayload {
  type: 'FETCH_TODOS_SUCCESS',
  payload: Todo[],
}

export interface FetchTodosFailurePayload {
  type: 'FETCH_TODOS_FAILURE',
  payload: string;
}

export interface FetchUsersRequestPayload {
  type: 'FETCH_USERS_REQUEST',
  loading: true,
  error: null,
}

export interface FetchUsersSuccessPayload {
  type: 'FETCH_USERS_SUCCESS',
  payload: Users[],
}

export interface FetchUsersFailurePayload {
  type: 'FETCH_USERS_FAILURE',
  payload: string;
}

export interface FetchCommentsRequestPayload {
  type: 'FETCH_COMMENTS_REQUEST',
  loading: true,
  error: null,
}

export interface FetchCommentsSuccessPayload {
  type: 'FETCH_COMMENTS_SUCCESS',
  payload: Comments[],
}

export interface FetchCommentsFailurePayload {
  type: 'FETCH_COMMENTS_FAILURE',
  payload: string;
}

export interface FetchAllDataRequest {
  type: 'FETCH_ALL_DATA_REQUEST',
  loading: true,
  error: null,
}

// reducers

export interface InitialTodosState {
  todos: Todo[],
  loading: boolean,
  error: string | null,
}

export interface InitialUersState {
  users: Users[],
  loading: boolean,
  error: string | null,
}

export interface InitialCommentsState {
  comments: Comments[],
  loading: boolean,
  error: null | string,
}

export type actionTodos = FetchTodosRequestPayload | FetchTodosSuccessPayload | FetchTodosFailurePayload; 
export type actionUsers = FetchUsersRequestPayload | FetchUsersSuccessPayload | FetchUsersFailurePayload;
export type actionComments = FetchCommentsRequestPayload | FetchCommentsSuccessPayload | FetchCommentsFailurePayload;

export type ActionAll = actionTodos | actionComments | actionUsers;
