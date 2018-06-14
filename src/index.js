import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Layout from 'components/Layout';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Layout} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
