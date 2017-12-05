import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/main/Root';
import 'babel-polyfill'; // has to be included after {AppContainer}, otherwise - warnings in console
import configureStore from './store/configureStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { getStoredState } from 'redux-persist';
import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/toastr/build/toastr.min.css';
import './resources/scripts/scrolling.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';

getStoredState({}, (err, restoredState) => {
  let store;

  if (!err) {
    store = configureStore(restoredState);
  } else {
    console.log('Failed to restore the Store state.'); // eslint-disable-line no-console
    store = configureStore();
  }

  const history = syncHistoryWithStore(browserHistory, store);

  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
  );

  if (module.hot) {
    module.hot.accept('./components/main/Root', () => {
      const NewRoot = require('./components/main/Root').default;
      render(
        <AppContainer>
          <NewRoot store={store} history={history} />
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }

});
