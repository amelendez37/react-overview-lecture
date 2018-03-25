import React from 'react';

var GamesListEntry = props => (
    <div class="ui cards">
      <div class="card">
        <div class="content">
        <div class="header">Date: 10-21-17<br/>Start Time: 1:00PM</div>
        <div class="description">
          Tonight's Game is Featuring:
        </div>
      </div>
      <div class="ui bottom attached button">
      <i class="add icon"></i>
        View Game
      </div>
    </div>
  </div>
);

export default GamesListEntry;