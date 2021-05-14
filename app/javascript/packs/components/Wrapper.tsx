// React
import React, { useEffect, FunctionComponent } from 'react';
import { withRouter } from "react-router-dom";
import Api from "../../packs/services/api";

// Components
import Header from "./Header";
import Footer from "./Footer";

type WrapperProps = {
  store: any,
  csrfToken: string,
  children: FunctionComponent<any>
};

const Wrapper: FunctionComponent<any> = (props: WrapperProps) => {
  const {store, csrfToken, children} = props;

  useEffect(() => {
    Api.init(store, csrfToken);
  }, []);

  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default withRouter(Wrapper);
