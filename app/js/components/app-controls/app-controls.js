import React from 'react';
import BallsCss from './app-controls.scss';
import AppActions from '../../actions/app-actions';

export default class Balls extends React.Component {
  render(){
    return (
        <div className="app-controls">
          <button className="btn btn-block btn-danger"
           onClick={AppActions.foul.bind(null)}>Foul!</button>

           <button className="btn btn-block btn-secondary"
            onClick={AppActions.foul.bind(null, 'blue')}>
            <span>Foul!</span>
            <span className="sr-only">(blue)</span>
            <span className="ball blue"></span></button>
            <button className="btn btn-block btn-secondary"
             onClick={AppActions.foul.bind(null, 'pink')}>
             <span>Foul!</span>
             <span className="sr-only">(pink)</span>
             <span className="ball pink"></span></button>
             <button className="btn btn-block btn-secondary"
              onClick={AppActions.foul.bind(null, 'black')}>
              <span>Foul!</span>
              <span className="sr-only">(black)</span>
              <span className="ball black"></span></button>


          <button className="btn btn-block btn-primary"
          onClick={AppActions.changePlayer.bind(null)}>Change Player</button>
          <button className="btn btn-block btn-warning end-game"
          onClick={AppActions.endGame.bind(null)}>End Game</button>
        </div>
    );
  }
}
