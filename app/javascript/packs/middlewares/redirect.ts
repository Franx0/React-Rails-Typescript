export default function redirectMiddleware(history: any): any {
  return ({dispatch, getState}) => (next: any) => (action: any) => {
    if (action.type === 'REDIRECT_TO') {
      const forced = action.data.forced || false;
      const locale = action.data.locale ? getState().intl.locale : null;
      const composeURL = locale ?
      (locale + action.data.url)
      :
      (action.data.url)

      if ((history.location.pathname !== composeURL) || forced) {
        Promise
          .resolve(history.push(composeURL))
          .then(() => {
            action.data.action
              ? dispatch(action.data.action)
              : console.info(`Resolved in path ${composeURL}`)
          })
          .catch((error) => console.log(error));
      }
    }

    return next(action);
  }
}
