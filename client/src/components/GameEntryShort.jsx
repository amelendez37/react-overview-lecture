import React from 'react';

const GameEntryShort = ({ game }) => (
  <div>
    <div className="ui cards centered">
      <div className="card">
        <div className="content">
          <div className="header">
            TITLE
          </div>
          <div className="description">
            This is a description.
            {console.log('My game is ', game)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GameEntryShort;
