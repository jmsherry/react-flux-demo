import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './../styles/styles.scss';
import App from './components/app';
import Router from 'react-router';
import routes from './config/routes';

ReactDOM.render((
  <Router>
    {routes}
  </Router>
), document.getElementById('main'));
