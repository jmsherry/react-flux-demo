import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = "CHANGE";

let _results = [
  [{
    name: "Stephen Hendry",
    image: 'http://i2.dailyrecord.co.uk/incoming/article874158.ece/ALTERNATES/s615/stephen-hendry-image-2-980022172.jpg',
    score: 0,
    frames: 8,
    active: true,
    won: true
  }, {
    name: "Steve Davis",
    image: "http://waytofamous.com/images/steve-davis-09.jpg",
    score: 0,
    frames: 7,
    active: false,
    won: false
  }]
];

const _getResults = () => {
  return _results;
}


const ResultsStore = Object.assign(EventEmitter.prototype, {
    emitChange() {
      this.emit(CHANGE_EVENT);
    },
    addChangeListener(cb) {
      this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    },
    getResults: () => {
      return {results: _getResults()};
    },
});

export default ResultsStore;
