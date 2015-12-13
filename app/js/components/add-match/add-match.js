import React from 'react';

export default class AddMatch extends React.Component {
  render(){
    return (
      <div className="match-form">
        <form>
          <h1 className="main-title">Match Form</h1>
          <div className="form-group">
            <label htmlFor="p1_name">Player 1:</label>
            <input type="text" className="form-control" id="p1_name" placeholder="Name" />
          </div>
          <div className="form-group">vs</div>
          <div className="form-group">
            <label htmlFor="p2_name">Player 2:</label>
            <input type="text" className="form-control" id="p2_name" placeholder="Name" />
          </div>
          <button type="submit" className="btn btn-primary pull-right">Start Match!</button>
        </form>
      </div>
    );
  }
}
