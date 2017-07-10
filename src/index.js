import 'babel-polyfill';
import configureStore from './store/configureStore';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/toastr/build/toastr.min.css';
import './resources/scripts/scrolling.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';


const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
