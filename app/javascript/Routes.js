// app/javascript/Routes.js
import React from "react";
import { Switch, Route } from "react-router-dom";

import AuthRoute from "./packs/routes/AuthRoute";
import NotFound from "./packs/containers/NotFound";

// Config
import routes from "./packs/config/routes";

export default (routesProps) => {
  return (
    <Route
      render={({ location }) => (
        <Switch key={routesProps.history.location.pathname}>
          {/** Public routes */}
          {/* <Route
            exact
            path={routes.client.signin}
            render={(props) => <Login {...props} />}
            history={routesProps.history}
          /> */}
          {/** Private routes */}
          {/* <AuthRoute
            {...routesProps.history}
            exact
            path={routes.client.survey}
            component={Survey}
          />
          <Route component={NotFound} /> */}
        </Switch>
      )}
    />
  );
};
