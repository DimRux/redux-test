import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllDataThunk } from './redux/thunks';
import {  fetchTodosRequest, fetchUsersRequest, fetchCommentsRequest, fetchAllDataRequest } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const { todos, users, comments, loading, error } = useSelector((state) => ({
    todos: state.todos.todos,
    users: state.users.users,
    comments: state.comments.comments,
    loading: state.todos.loading || state.users.loading || state.comments.loading,
    error: state.todos.error || state.users.error || state.comments.error
  }));

  useEffect(() => {
    // Используем Thunk для параллельных запросов
    dispatch(fetchAllDataThunk());

    // Или можем использовать подход Saga или Observable:
    // dispatch(fetchAllDataRequest()); // Для Saga и Observable

    // Можно вызвать действия по отдельности:
    // dispatch(fetchTodosRequest());
    // dispatch(fetchUsersRequest());
    // dispatch(fetchCommentsRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos && todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users && users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h3>Comments</h3>
      <ul>
        {comments && comments.map((comment) => (
          <li key={comment.id}>{comment.content} (Todo ID: {comment.todoId})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;