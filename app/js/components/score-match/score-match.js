import React from 'react';
import Balls from './../balls/balls';
import Players from './../players/players';

export default class Scorer extends React.Component {
  render(){
    return (
      <div>
        <Balls />
        <Players />
      </div>
    );
  }
}
