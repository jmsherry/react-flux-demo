import React from 'react';
import BallsCss from './balls.scss';
import AppActions from '../../actions/app-actions';

export default class Balls extends React.Component {
  render(){
    return (
        <div className="row">
          <div className="balls">
            <button className="ball red" onClick={AppActions.potBall.bind(null, 'red')}><span className="sr-only">Red</span></button>
            <button className="ball yellow" onClick={AppActions.potBall.bind(null, 'yellow')}><span className="sr-only">Yellow</span></button>
            <button className="ball green" onClick={AppActions.potBall.bind(null, 'green')}><span className="sr-only">Green</span></button>
            <button className="ball brown" onClick={AppActions.potBall.bind(null, 'brown')}><span className="sr-only">Brown</span></button>
            <button className="ball blue" onClick={AppActions.potBall.bind(null, 'blue')}><span className="sr-only">Blue</span></button>
            <button className="ball pink" onClick={AppActions.potBall.bind(null, 'pink')}><span className="sr-only">Pink</span></button>
            <button className="ball black" onClick={AppActions.potBall.bind(null, 'black')}><span className="sr-only">Black</span></button>
          </div>
        </div>
    );
  }
}
