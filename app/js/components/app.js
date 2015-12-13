import React from 'react';
import { RouteHandler } from 'react-router';
import Store from '../stores/app-store';

export default class App extends React.Component {
  render(){
    return (
      <div className="container container-fluid">
        <div className="row">
          <h1 className="main-title">Snooker Scorer</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}
