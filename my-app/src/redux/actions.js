export const fetchTodosRequest = () => ({ type: 'FETCH_TODOS_REQUEST' });
export const fetchTodosSuccess = (todos) => ({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
export const fetchTodosFailure = (error) => ({ type: 'FETCH_TODOS_FAILURE', payload: error });

export const fetchUsersRequest = () => ({ type: 'FETCH_USERS_REQUEST' });
export const fetchUsersSuccess = (users) => ({ type: 'FETCH_USERS_SUCCESS', payload: users });
export const fetchUsersFailure = (error) => ({ type: 'FETCH_USERS_FAILURE', payload: error });

export const fetchCommentsRequest = () => ({ type: 'FETCH_COMMENTS_REQUEST' });
export const fetchCommentsSuccess = (comments) => ({ type: 'FETCH_COMMENTS_SUCCESS', payload: comments });
export const fetchCommentsFailure = (error) => ({ type: 'FETCH_COMMENTS_FAILURE', payload: error });

export const fetchAllDataRequest = () => ({ type: 'FETCH_ALL_DATA_REQUEST' });