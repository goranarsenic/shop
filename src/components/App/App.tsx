import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "../../containers/Products";
import "../../styles/styles.scss";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
