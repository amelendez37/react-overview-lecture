import React from 'react';
import GameEntryShort from './GameEntryShort.jsx';

const GameList = ({games}) => (
  <div>
    {games.map(game => <GameEntryShort key={game.id} game={game} />)}
  </div>
);

export default GameList;
