import React from "react";
import {
  withRouter,
  RouteComponentProps,
  Switch,
  Route
} from "react-router-dom";

import App from "../App";

class Root extends React.Component<RouteComponentProps> {
  render() {
    return (
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    );
  }
}

export default withRouter(Root);
