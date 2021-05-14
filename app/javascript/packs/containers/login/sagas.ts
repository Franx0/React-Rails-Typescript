import {call, put, takeLatest, takeLeading, all} from 'redux-saga/effects';
import {FETCH_AUTH, FETCH_LOGIN, fetchLoginOk} from './actions';
import Api from '../../services/api';
import { setErrors } from "../../actions";

// Config
import routes from '../../config/routes';

function * fetchLoginSaga(action: any): any {
  try {
    let response = yield call(Api.handlePost, routes.session.create, {}, action.data);

    if(response.status) {
      yield put(fetchLoginOk(response));
    } else {
      yield put(setErrors('login', response.message))
    }
  } catch (error) {
    // yield put(fetchSearchERR(error))
  }
}

function * fetchAuthSaga(){
  try {
    const response = yield call(Api.handleGet, routes.session.authUser, {}, {})

    if(response.status) {
      yield put(fetchLoginOk(response));
    }
  } catch (error) {
    // yield put(fetchSearchERR(error))
  }
}

export function * watchAuthentication() {
  yield all([
    takeLatest(FETCH_LOGIN, fetchLoginSaga),
    takeLeading(FETCH_AUTH, fetchAuthSaga)
  ])
}
