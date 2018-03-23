import React from 'react';
import GameEntryShort from './GameEntryShort.jsx';

const GameList = ({games, handler}) => (
  <div>
    {games.map(game => <GameEntryShort key={game.id} game={game} handler={handler}/>)}
  </div>
);

export default GameList;
