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

          <p className="ctrls-section-heading">Frame</p>
          <button className="btn btn-block btn-success"
          onClick={AppActions.endFrame.bind(null, 0)}>
            <i className="fa fa-arrow-left"></i>
            <span className="sr-only">Win Frame</span>
          </button>

          <button className="btn btn-block btn-success"
          onClick={AppActions.endFrame.bind(null, 1)}>
            <i className="fa fa-arrow-right"></i>
            <span className="sr-only">Win Frame</span>
          </button>

          <p className="ctrls-section-heading">Match</p>
          <button className="btn btn-block btn-warning end-game"
          onClick={AppActions.endGame.bind(null)}>End Game</button>
        </div>
    );
  }
}
