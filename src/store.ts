import { Store, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

declare var window: any;

export default function configureStore(): Store<any, any> {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
