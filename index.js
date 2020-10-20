import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./src/state/store/configureStore";

const store = configureStore();

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(ConnectedApp);