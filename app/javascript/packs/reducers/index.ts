
import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {FETCH_LOGOUT} from '../containers/login/actions';
import {SET_TRANSLATIONS_OK, SET_ERRORS_OK} from '../actions';

/** Reducers imports */
import historyReducer from '../containers/histories/reducers';

const defaultGlobalState = {translations: {}, errors: {}};

const globalReducer = (state = defaultGlobalState, action) => {
  switch (action.type) {
    case SET_TRANSLATIONS_OK:
      return {...state, translations: {...state.translations,
          [action.data.name]: action.data.translations
        }}
    case SET_ERRORS_OK:
      return {...state, errors: {...state.errors,
          [action.data.name]: action.data.errors
        }}
    default:
      return state
  };
}

const appReducer = combineReducers({
  routing,
  history: historyReducer,
  global: globalReducer
});

const rootReducer = (state: any, action: any): any => {
  if (action.type === FETCH_LOGOUT) {
    localStorage.clear();
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;
