import axios from 'axios';
import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from './actions';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from './actions';
import { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsFailure } from './actions';

export const fetchAllDataThunk = () => async (dispatch) => {
  dispatch(fetchTodosRequest());
  dispatch(fetchUsersRequest());
  dispatch(fetchCommentsRequest());

  try {
    const [todosResponse, usersResponse, commentsResponse] = await Promise.all([
      axios.get('http://localhost:3001/todos'),
      axios.get('http://localhost:3001/users'),
      axios.get('http://localhost:3001/comments'),
    ]);

    dispatch(fetchTodosSuccess(todosResponse.data));
    dispatch(fetchUsersSuccess(usersResponse.data));
    dispatch(fetchCommentsSuccess(commentsResponse.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
    dispatch(fetchUsersFailure(error.message));
    dispatch(fetchCommentsFailure(error.message));
  }
};