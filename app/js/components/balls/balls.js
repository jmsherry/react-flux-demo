import React from 'react';
import BallsCss from './balls.scss';
import AppActions from '../../actions/app-actions';
import AppStore from '../../stores/app-store';

const targetBall = () => {
  return AppStore.getTargetBall();
}

export default class Balls extends React.Component {
  constructor(){
    super();
    this.state = targetBall();
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    AppStore.addChangeListener(this._onChange);
  }
  componentWillUnmount(){
    AppStore.removeChangeListener(this._onChange);
  }
  _onChange(){
    this.setState(targetBall);
  }
  render(){
    let targetBall = this.state.targetBall;
    return (
        <div className="row">
          <div className="balls">
            <button className="ball red"
                onClick={AppActions.potBall.bind(null, 'red')}
                disabled={targetBall !== 'red' }>
              <span className="sr-only">Red</span>
            </button>
            <button className="ball yellow"
                onClick={AppActions.potBall.bind(null, 'yellow')}
                disabled={targetBall !== 'colour' && targetBall !=='yellow'}>
              <span className="sr-only">Yellow</span>
            </button>
            <button className="ball green"
                onClick={AppActions.potBall.bind(null, 'green')}
                disabled={targetBall !== 'colour' && targetBall !=='green'}>
              <span className="sr-only">Green</span>
            </button>
            <button className="ball brown"
                onClick={AppActions.potBall.bind(null, 'brown')}
                disabled={targetBall !== 'colour' && targetBall !=='brown'}>
              <span className="sr-only">Brown</span>
            </button>
            <button className="ball blue"
                onClick={AppActions.potBall.bind(null, 'blue')}
                disabled={targetBall !== 'colour' && targetBall !=='blue'}>
              <span className="sr-only">Blue</span></button>
            <button className="ball pink"
                onClick={AppActions.potBall.bind(null, 'pink')}
                disabled={targetBall !== 'colour' && targetBall !=='pink'}>
              <span className="sr-only">Pink</span>
            </button>
            <button className="ball black"
                onClick={AppActions.potBall.bind(null, 'black')}
                disabled={targetBall !== 'colour' && targetBall !=='black'}>
              <span className="sr-only">Black</span>
            </button>
          </div>
        </div>
    );
  }
}
