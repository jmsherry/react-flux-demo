import React from 'react';
import FrameCounterCss from './frame-counter.scss';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';

const players = () => {
  return AppStore.getPlayers();
}

export default class Balls extends React.Component {
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
    return (
        <div className="frame-counter">
          <p>{this.state.players[0].frames} - {this.state.players[1].frames}</p>
        </div>
    );
  }
}
