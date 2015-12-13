import React from 'react';

export default class Player extends React.Component {
  render(){
    return (
        <div className="player">
          <img src="" alt="" />
          <h1>{ this.props.player.name }</h1>
          <p><span className="sr-only">Score:</span>
          <span className="score">{ this.props.player.score }</span>
          </p>
        </div>
    );
  }
}
