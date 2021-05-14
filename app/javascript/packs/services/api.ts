import {config} from '../config'

const enviroment = (process.env.FORCE_NODE_ENV || 'development');

let dispatch;
let state;
let csrfToken;
const api_config = config[enviroment];

function initialize(store: any, token: string) {
  dispatch = store.dispatch;
  state = store.getState();
  csrfToken = token
}

const getUrl = (path: string, api: any): string => {
  return api.url + "/" + path
}

const buildQueryParams = (paramsObj: any): string => {
  let params: Array<any>=[];

  for (let key in paramsObj) {
    if (Array.isArray(paramsObj[key])) {
      for (let item of paramsObj[key]) {
        let paramString = encodeURIComponent(item && item.toString());
        if (paramString !== '')
          params.push(`${encodeURIComponent(key)}=${paramString}`);
        }
    } else if (paramsObj[key]) {
      let paramString = encodeURIComponent(paramsObj[key] && paramsObj[key].toString());
      if (paramString !== '')
        params.push(`${encodeURIComponent(key)}=${paramString}`);
    }
  }
  return params.length > 0
    ? '?' + params.join('&')
    : '';
}

const handleRequest = (
  method: string, url: string, params: any = {}, body: any = {}, headers: any = {}, api: any, format: string = 'application/json'
): Promise<Response> => {
  dispatch;
  // Merge headers
  const _headers = Object.assign({
    "X-CSRF-Token": csrfToken,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    Accept: format,
  }, headers,
    state.client.token ? { Authorization: state.client.token } : null
  );

  // Set Query String params
  const queryParams = buildQueryParams(params);
  url = getUrl(url, api);
  url += queryParams;

  let newUrl: any = new URL(url); // Not supported in IE

  // Do the request with native fetch
  body = (method === "GET")
    ? null
    : JSON.stringify(body)

  return fetch(newUrl, {
    method: method,
    headers: _headers,
    body: body
  });
}

const handleResponse = (promise: Promise<Response>): Promise<Response> => {
  return new Promise((resolve, reject) => {
    promise.then((response) => {
      const status = response.status;

      response
        .json()
        .then(response => {
          if (status >= 200 && status < 300) {
            resolve({ ...response, status: true });
          } else if (status === 400) {
            resolve({ ...response, status: false })
          } else if (status === 401) {
            // resolve(dispatch(fetchLogout()));
            // resolve({ ...response, status: false })
            window.location.href = window.location.href;
          } else if (status === 403) {
            resolve({ ...response, status: false })
          } else if (status === 404) {
            resolve({ ...response, status: false })
          } else {
            reject({
              ...response,
              status: status
            });
          }
        });
      dispatch;
    }).catch((e) => {
      dispatch;
      reject(e);
    })
  });
}

export default {
  init: (store: any, csrfToken: string): void => {
    initialize(store, csrfToken);
  },
  handleGet: (url: string, params: any, headers: any): Promise<Response> => {
    try {
      return handleResponse(handleRequest("GET", url, params, {}, headers, api_config.client));
    } catch (e) {
      console.error(url);
      console.error(e);
    }
  },
  handlePost: (url: string, params: any, body: any, headers: any): Promise<Response> => {
    try {
      return handleResponse(handleRequest("POST", url, params, body, headers, api_config.client));
    } catch (e) {
      console.error(url);
      console.error(e);
    }
  },
  handlePut: (url: string, params: any, body: any, headers: any): Promise<Response> => {
    return handleResponse(handleRequest("PUT", url, params, body, headers, api_config.client));
  },
  handleDelete: (url: string, params: any, body: any, headers: any): Promise<Response> => {
    return handleResponse(handleRequest("DELETE", url, params, body, headers, api_config.client));
  },
  buildQueryParams: (paramsObj: any = {}): string => {
    try {
      return buildQueryParams(paramsObj);
    } catch (e) {
      console.error(e);
    }
  }
};
