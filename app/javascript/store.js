import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import promise from 'redux-promise';
import {routerMiddleware} from 'react-router-redux';
import logger from 'redux-logger';

import rootReducer from './packs/reducers';

/** Middleware imports */
import redirectMiddleware from './packs/middlewares/redirect';

/** Sagas */
import * as Authentication from './packs/containers/login/sagas';

const sagas = {
  ...Authentication,
};

export default function configureStore(history) {
  const sagaMiddleWare = createSagaMiddleWare();
  const redirectMW = redirectMiddleware(history);
  const routerMW = routerMiddleware(history);
  const middleWares = [promise, sagaMiddleWare, redirectMW, routerMW, logger];
  let store = createStore(rootReducer, compose(
    applyMiddleware(...middleWares),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__({trace: true}) : f => f)
  );

  /* Set client credentials in localStorage */
  store.subscribe(()=>{
    localStorage.setItem('client', (JSON.stringify({
      token: ((localStorage.getItem('client') && localStorage.getItem('client').token) ? localStorage.getItem('client') : store.getState().client).token
    })));
  });

  // Register sagas
  for (let saga in sagas) {
    sagaMiddleWare.run(sagas[saga])
  };

  return store;
}
