import React from 'react';

var GamesListEntry = props => (
    <div className="ui cards">
      <div className="card">
        <div className="content">
        <div className="header">{'Date: ' + props.game.date}<br/>{'Start Time: ' + props.game.time}</div>
        <div className="description">
          Tonight's Game is Featuring:
        </div>
        <div className="left">
          <p>Home Team</p>
          <p>{props.game.homeTeam.Abbreviation}</p>
        </div>
        <div className="left spacing-left">
          <p>Away Team</p>
          <p>{props.game.awayTeam.Abbreviation}</p>
        </div>
      </div>
      <div className="ui bottom attached button" onClick={() => props.handleViewGameClick(props.game)}>
      <i className="add icon"></i>
        View Game
      </div>
    </div>
  </div>
);

export default GamesListEntry;