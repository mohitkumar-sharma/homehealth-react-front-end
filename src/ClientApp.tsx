import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import config from "./config";
import { SharedControls } from '@mohitkumar-sharma/homehealth-common-feature';
// import { API_URL } from './config/env.json';

const { store } = config;
/**
 * This is the web client referring to all enclosed components
 *
 * @returns
 */
const ClientApp = (): JSX.Element => {
  console.log('API_URL--', 'https://developmentserver.homehealth.digital/api/');
  SharedControls.settings.injectConfigurationSettings({
    apiBaseUrl: 'https://developmentserver.homehealth.digital/api/',
    reduxStore: config.store,
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
