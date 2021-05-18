import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SharedControls } from '@mohitkumar-sharma/homehealth-common-feature';
import Config from './config/';
const { store, env } = Config;
/**
 * This is the web client referring to all enclosed components
 *
 * @returns
 */
const ClientApp = (): JSX.Element => {
  SharedControls.settings.injectConfigurationSettings({
    apiBaseUrl: env.API_URL,
    reduxStore: store,
  });
  return (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
  );
};

export default ClientApp;
