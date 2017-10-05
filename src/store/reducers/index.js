/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { connectRoutes } from 'redux-first-router';
// import createHistory from 'history/createBrowserHistory';
// import { baseUrl } from 'config';
// import url from './url';
// import user from './user';
import music from './music';
import musicSaga from '../sagas/musicSaga';

// const history = createHistory({ basename: baseUrl });

// const routesMap = {
//   HOME: '/',
//   EDUCATION: '/education',
// };

// const {
//   reducer: location,
//   middleware: locationMiddleware,
//   enhancer,
// } = connectRoutes(history, routesMap);

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const composed = [middlewares];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  composed.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default createStore(
  combineReducers({ music }),
  compose(...composed),
);

sagaMiddleware.run(musicSaga);
