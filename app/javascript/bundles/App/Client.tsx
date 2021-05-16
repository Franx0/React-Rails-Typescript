// app/javascript/App.js
import React, { FunctionComponent } from "react";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";
import configureStore from "../../store";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

// Routes
import Routes from "../../Routes";

// Components
import Wrapper from "../../packs/components/Wrapper";

const history = createBrowserHistory();
const store = configureStore();

type ClientProps = {
  csrfToken: string
};

const Client: FunctionComponent<any> = (props: ClientProps) => {
  const { csrfToken } = props;
  return (
    <Provider store={store}>
      <Router history={history}>
        <Wrapper store={store} csrfToken={csrfToken}>
          <Routes history={history} />
        </Wrapper>
      </Router>
    </Provider>
  );
};

export default Client;
