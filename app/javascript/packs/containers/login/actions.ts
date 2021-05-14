export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_AUTH = 'FETCH_AUTH';
export const FETCH_AUTH_OK = 'FETCH_AUTH_OK';
export const FETCH_LOGIN_OK = 'FETCH_LOGIN_OK';
export const FETCH_LOGOUT = 'FETCH_LOGOUT';
export const FETCH_LOGOUT_OK = 'FETCH_LOGOUT_OK';

/** Actions to reducers */
export function fetchLoginOk(data: any): any {
  return {
    type: FETCH_LOGIN_OK,
    ...data
  }
}

export function fetchLogout(): any {
  return {
    type: FETCH_LOGOUT
  }
}

/** Actions to sagas */
export function fetchLogin(data: any): any {
  return {
    type: FETCH_LOGIN,
    data: {
      user: data
    }
  }
}

export function fetchAuth(): any {
  return {
    type: FETCH_AUTH
  }
}
