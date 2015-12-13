import React from 'react';
import { Router, Route, Link } from 'react-router';
import ResultsCSS from './results.scss';
import Store from '../../stores/results-store';

export default class Results extends React.Component {
  constructor(){
    super();
    this.state = Store.getResults();
  }
  render(){
    let i = 0, item, results;
    results = this.state.results.map( result => {
      item = <li key={i}><span className={result[0].won ? "won" : ""}>{result[0].name} ({result[0].frames})</span> vs <span className={result[1].won ? "won" : ""}>{result[1].name} ({result[1].frames})</span></li>
      i+=1;
      return item;
    })
    return (
      <div className="results">
        <div className="row">
          <h1 className="main-title">Results</h1>
          <Link className="btn btn-primary" to={`addMatch`}>Add a match</Link>
          <ul>{results}</ul>
        </div>
      </div>
    );
  }
}
