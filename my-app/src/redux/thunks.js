import axios from 'axios';
import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from './actions';

export const fetchTodosThunk = () => async (dispatch) => {
  dispatch(fetchTodosRequest());
  try {
    const response = await axios.get('http://localhost:3001/todos');
    dispatch(fetchTodosSuccess(response.data));
  } catch (error) {
    dispatch(fetchTodosFailure(error.message));
  }
};