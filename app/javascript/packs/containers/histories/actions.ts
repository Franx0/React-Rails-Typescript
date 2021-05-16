export const FETCH_HISTORIES = 'FETCH_HISTORIES';
export const FETCH_HISTORY = 'FETCH_HISTORY';
export const FETCH_HISTORY_OK = 'FETCH_HISTORY_OK';
export const FETCH_CREATE_HISTORY = 'FETCH_CREATE_HISTORY';


/** Actions to reducers */
export function fetchHistory(data: any) {
  return {
    type: FETCH_HISTORY,
    ...data
  }
}

export function fetchHistoryOk(data: any) {
  return {
    type: FETCH_HISTORY_OK,
    data
  }
}

/** Actions to sagas */
export function fetchHistories() {
  return {
    type: FETCH_HISTORIES
  }
}

export function fetchHistoryCreate(data: Array<number>) {
  return {
    type: FETCH_CREATE_HISTORY,
    data
  }
}
