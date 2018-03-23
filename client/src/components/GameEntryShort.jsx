import React from 'react';

const GameEntryShort = ({ game, handler }) => (
  <div>
    <div className="ui cards centered flex">
      <div className="card"
          onClick={()=>{handler(game)}}
          >
        <div className="content">
          <div className="header">
            Basketball Start Time: {game.time} @ {game.location}
          </div>
          <div className="description">
            <h3>Away Team             vs.              Home Team </h3>
            <hr />
            {game.awayTeam.City} {game.awayTeam.Name} | {game.homeTeam.City} {game.homeTeam.Name}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GameEntryShort;
