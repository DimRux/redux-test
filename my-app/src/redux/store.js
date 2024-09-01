import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { rootEpic } from './epics';

// Создаем saga и observable middleware
const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

// Создаем store с middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(thunk, sagaMiddleware, epicMiddleware),
});

// Запуск saga и/или epic middleware, лучше использовать что-то одно.
sagaMiddleware.run(rootSaga);
epicMiddleware.run(rootEpic);

export default store;