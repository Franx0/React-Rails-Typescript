import {call, put, takeLatest, all} from 'redux-saga/effects';
import {FETCH_HISTORIES, FETCH_CREATE_HISTORY, fetchHistoryOk } from './actions';
import Api from '../../services/api';
import { redirectTo } from "../../actions";

// Config
import routes from '../../config/routes';

function* fetchHistoriesSaga() {
  try {
    const response = yield call(Api.handleGet, routes.histories.index, {}, {});

    if(response.status) {
      yield put(fetchHistoryOk(response.data));
    } else {
      yield put(redirectTo(routes.client.home));
    };
  } catch (error) {
    // yield putResolve(redirectTo(routes.client.home));
  }
}

export function * fetchCreateHistorySaga(action: any) {
  try {
    const response = yield call(Api.handlePost, routes.histories.create, {}, action.data, {});

    if(response.status) {
      yield put(fetchHistoryOk(response.data));
    };
  } catch (error) {
    // yield putResolve(redirectTo(routes.client.home));
  }
}

export function * watchHistories() {
  yield all([
    takeLatest(FETCH_HISTORIES, fetchHistoriesSaga),
    takeLatest(FETCH_CREATE_HISTORY, fetchCreateHistorySaga),
  ])
}
