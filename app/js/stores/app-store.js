import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = "CHANGE";

var balls = {
  red: 2,
  yellow: 1,
  green: 1,
  brown: 1,
  blue: 1,
  pink: 1,
  black: 1
};

var game_over = false;

var total_frames = 15;
var frame_target = Math.floor(total_frames / 2);

var players = [{
  name: "Stephen Hendry",
  image: 'http://i2.dailyrecord.co.uk/incoming/article874158.ece/ALTERNATES/s615/stephen-hendry-image-2-980022172.jpg',
  score: 0,
  frames: 0,
  active: true
}, {
  name: "Steve Davis",
  image: "http://waytofamous.com/images/steve-davis-09.jpg",
  score: 0,
  frames: 0,
  active: false
}];

var targetBall = 'red';



var _playerIndex = 0;
var _nonPlayerIndex = 1;
var activePlayer = players[_playerIndex];
    activePlayer.active = true;
var inactivePlayer = players[_nonPlayerIndex];


const _potBall = (ball) => {

  console.log('_potBall', arguments);
  switch (ball) {
    case 'red':
      activePlayer.score += 1;
      balls.red -=1;
      if(balls.red === 0){
        targetBall = 'yellow';
      } else {
        targetBall = 'colour';
      }
      break;
    case 'yellow':
      activePlayer.score += 2;
      if(!balls.red){
        balls.yellow = 0;
        targetBall = 'green';
      } else {
        targetBall = 'red';
      }
      break;
    case 'green':
      activePlayer.score += 3;
      if(!balls.yellow && !balls.red){
        balls.green = 0;
        targetBall = 'brown';
      } else {
        targetBall = 'red';
      }
      break;
    case 'brown':
      activePlayer.score += 4;
      if(!balls.green && !balls.red){
        balls.brown = 0;
        targetBall = 'blue';
      } else {
        targetBall = 'red';
      }
      break;
    case 'blue':
      activePlayer.score += 5;
      if(!balls.brown && !balls.red){
        balls.blue = 0;
        targetBall = 'pink';
      } else {
        targetBall = 'red';
      }
      break;
    case 'pink':
      activePlayer.score += 6;
      if(!balls.blue && !balls.red){
        balls.pink = 0;
        targetBall = 'black';
      } else {
        targetBall = 'red';
      }
      break;
    case 'black':
      activePlayer.score += 7;
      if(!balls.pink && !balls.red){
        balls.black = 0;
        return _endGame();
      } else {
        targetBall = 'red';
      }
      break;
  }

  console.log(activePlayer);
  console.log(balls);
  console.log(targetBall);
}

const _foul = (foul) => {
  console.log('_foul', arguments);
  let foulScore;
  switch (foul) {
    case "blue":
      foulScore = 5;
      break;
    case "pink":
      foulScore = 6;
      break;
    case "black":
      foulScore = 7;
      break;
    default:
      foulScore = 4;
  }
  console.log('_foulScore', inactivePlayer.score);
  inactivePlayer.score += foulScore;
  console.log('updated', inactivePlayer.score);
}

const _changePlayer = () => {
  console.log('_changePlayer');
  inactivePlayer = players[_playerIndex];
  inactivePlayer.active = false;
  switch(_playerIndex){
    case 0:
    _playerIndex = 1;
    break;
    case 1:
    _playerIndex = 0;
    break;
  }
  activePlayer = players[_playerIndex];
  activePlayer.active = true;
  targetBall = 'red';

  console.log('activePlayer', activePlayer);
}

const _endGame = () => {
  game_over = true;
  alert('Game Over');
}

const _endFrame = (playerid) => {
  activePlayer.score = 0;
  inactivePlayer.score = 0;
  targetBall = 'red';
  players[playerid].frames += 1;
}


const AppStore = Object.assign(EventEmitter.prototype, {
    emitChange() {
      this.emit(CHANGE_EVENT);
    },
    addChangeListener(cb) {
      this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    },
    getPlayers: () => {
      return {players: players};
    },
    getCurrentPlayer: () => {
      return {player: activePlayer};
    },
    getTargetBall: () => {
      return {targetBall: targetBall};
    },
    setPlayers: (players) => {
      players = [
        {
          id: 'player_1',
          name: players[0],
          score: 0
        }, {
          id: 'player_2',
          name: players[1],
          score: 0
        }
      ];
    },
    dispatcherIndex: register(function(action) {
      console.log('DISPATCHER', action);
      if(game_over){
        return;
      }
      switch (action.actionType) {
        case 'POT_BALL':
          _potBall(action.ball);
          break;
        case 'FOUL':
          _foul(action.penalty);
          _changePlayer();
          break;
        case 'CHANGE_PLAYER':
          _changePlayer();
          break;
          case 'END_FRAME':
            _endFrame(action.playerid);
            break;
        case 'END_GAME':
          _endGame();
          break;
      }
      AppStore.emitChange();
    })
});

export default AppStore;
