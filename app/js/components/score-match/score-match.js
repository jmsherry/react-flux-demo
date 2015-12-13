import React from 'react';
import Balls from './../balls/balls';
import Players from './../players/players';

export default class Scorer extends React.Component {
  render(){
    return (
      <div>
        <div className="row">
          <h1 className="main-title">Snooker Scorer</h1>
        </div>
        <Balls />
        <Players />
      </div>
    );
  }
}
