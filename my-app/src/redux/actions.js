export const fetchTodosRequest = () => ({ type: 'FETCH_TODOS_REQUEST' });
export const fetchTodosSuccess = (todos) => ({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
export const fetchTodosFailure = (error) => ({ type: 'FETCH_TODOS_FAILURE', payload: error });