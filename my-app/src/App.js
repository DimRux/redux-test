import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosThunk } from './redux/thunks';
import { fetchTodosRequest } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state);

  useEffect(() => {
    // Можно использовать любой из методов для получения данных
     dispatch(fetchTodosThunk());  // Thunk
    // dispatch(fetchTodosRequest());  // Saga или Observable
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
    </div>
  );
}

export default App;