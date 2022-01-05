import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initStore } from './store/store';
import { loadRootState } from 'utils/localStorage';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'theme';
import './i18n';

const store = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
