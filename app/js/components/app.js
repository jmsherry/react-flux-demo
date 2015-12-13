import React from 'react';
import Store from '../stores/app-store';
import Balls from './balls/balls';
import Players from './players/players';

export default class App extends React.Component {
  render(){
    return (
      <div className="container container-fluid">
        <div className="row">
          <h1 className="main-title">Snooker Scorer</h1>
        </div>
        <Balls />
        <Players />
      </div>
    );
  }
}
