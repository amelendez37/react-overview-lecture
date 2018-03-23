import React from 'react';

const GameOfTheNight = ({game}) =>(
  <div>
    <div className="ui cards centered">
      <div className="image">
        <img src="./assets/images/basketball.png" />
      </div>
      <div className="card">
        <div className="content">
          <div className="header">
            {game.awayTeam.City} {game.awayTeam.Name} vs {game.homeTeam.City} {game.homeTeam.Name}
          </div>
          <div className="description">
            This is a description.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GameOfTheNight;
