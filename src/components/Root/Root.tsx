import React from "react";
import { Provider } from "react-redux";

import App from "../App";
import { Store } from "redux";

interface IProps {
  store: Store<any, any>;
}
const Root = (props: IProps) => (
  <Provider store={props.store}>
    <App />
  </Provider>
);

export default Root;
