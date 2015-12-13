import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = "CHANGE";

var balls = {
  red: 15,
  yellow: 1,
  green: 1,
  brown: 1,
  blue: 1,
  pink: 1,
  black: 1
};

var players = [{
  name: "Stephen Hendry",
  score: 0
}, {
  name: "Steve Davis",
  score: 0
}];


var _playerIndex = 0;
var _nonPlayerIndex = 1;
var activePlayer = players[_playerIndex];
var inactivePlayer = players[_nonPlayerIndex];


const _potBall = (ball) => {
  console.log('_potBall', arguments);
  console.log(activePlayer);
  switch (ball) {
    case 'red':
      activePlayer.score += 1;
      break;
    case 'yellow':
      activePlayer.score += 2;
      break;
    case 'green':
      activePlayer.score += 3;
      break;
    case 'brown':
      activePlayer.score += 4;
      break;
    case 'blue':
      activePlayer.score += 5;
      break;
    case 'pink':
      activePlayer.score += 6;
      break;
    case 'black':
      activePlayer.score += 7;
      break;
  }
  console.log(activePlayer);
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
  switch(_playerIndex){
    case 0:
    _playerIndex = 1;
    break;
    case 1:
    _playerIndex = 0;
    break;
  }
  activePlayer = players[_playerIndex];
  console.log('activePlayer', activePlayer);
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
      switch (action.actionType) {
        case 'POT_BALL':
          _potBall(action.ball)
          break;
        case 'FOUL':
          _foul(action.penalty)
          break;
        case 'CHANGE_PLAYER':
          _changePlayer()
          break;
        default:

      }
      AppStore.emitChange();
    })
});

export default AppStore;
