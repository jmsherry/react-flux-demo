import React from 'react';
import PlayersCss from './players.scss';
import Player from './player.js';
import AppControls from '../app-controls/app-controls';
import AppStore from '../../stores/app-store';


const players = () => {
  return AppStore.getPlayers();
}

export default class Players extends React.Component {
  constructor(){
    super();
    this.state = players();
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    AppStore.addChangeListener(this._onChange);
  }
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }
  _onChange(){
    this.setState(players);
  }
  render(){
    console.log(this.state);
    return (
        <div className="row">
          <div className="col-sm-5">
              <Player player={this.state.players[0]} />
          </div>
          <div className="col-sm-2">
            <AppControls />
          </div>
          <div className="col-sm-5">
              <Player player={this.state.players[1]} />
          </div>
        </div>
    );
  }
}
