import React from 'react';
import { RouteHandler } from 'react-router';
import Store from '../stores/app-store';

export default class App extends React.Component {
  render(){
    return (
      <div className="container container-fluid">
        {this.props.children}
      </div>
    );
  }
}
