import React from 'react';

var GameOfTheNight = props => (
    <div className="border left left-col">
        <h2>Game Of The Night</h2>
        <div>
        <div className="left">
            <h3>Home Team</h3>
            <img src="/../../client/dist/assets/images/basketball.png"/>
            <h3>{props.game.homeTeam.City + ' ' + props.game.homeTeam.Name}</h3>
        </div>
        <div className="left spacing-left">
            <h3>Away Team</h3>
            <img src="/../../client/dist/assets/images/basketball.png"/>
            <h3>{props.game.awayTeam.City + ' ' + props.game.awayTeam.Name}</h3>
        </div>
        </div>
    </div>
);

export default GameOfTheNight;