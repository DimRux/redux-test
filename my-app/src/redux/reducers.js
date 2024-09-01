import { combineReducers } from "redux";

const initialTodosState = { todos: [], loading: false, error: null };
const initialUsersState = { users: [], loading: false, error: null };
const initialCommentsState = { comments: [], loading: false, error: null };

const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_TODOS_SUCCESS":
      return { ...state, loading: false, todos: action.payload };
    case "FETCH_TODOS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, loading: false, users: action.payload };
    case 'FETCH_USERS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const commentsReducer = (state = initialCommentsState, action) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_COMMENTS_SUCCESS':
      return { ...state, loading: false, comments: action.payload };
    case 'FETCH_COMMENTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  todos: todosReducer,
  users: usersReducer,
  comments: commentsReducer,
});

