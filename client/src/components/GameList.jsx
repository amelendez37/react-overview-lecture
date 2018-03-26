import React from 'react';
import GameListEntry from './GameListEntry'

var GameList = props => (
  <div className="border left right-col">
    <h2>Other Games This Evening</h2>
    {props.gameList.map(game => <GameListEntry key={game.id} game={game} handleViewGameClick={props.handleViewGameClick} />)}
  </div>
);

export default GameList;