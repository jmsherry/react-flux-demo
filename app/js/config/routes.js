import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Results from '../components/results/results';
import AddMatch from '../components/add-match/add-match';
import Scorer from '../components/score-match/score-match';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Results} />
    <Route path="addMatch" component={AddMatch} />
    <Route path="scoreMatch" component={Scorer} />
  </Route>
);
