import React from 'react';
import axios from 'axios';

import NavBar from './NavBar.jsx';
import GameOfTheNight from './GameOfTheNight.jsx';
import GameList from './GameList.jsx';

const REST_SERVER_URL = `http://localhost:3000/gameentry`;

const starterGame = {
  "id": "9",
  "scheduleStatus": "Normal",
  "originalDate": null,
  "originalTime": null,
  "delayedOrPostponedReason": null,
  "date": "2018-03-11",
  "time": "9:00PM",
  "awayTeam": {
    "ID": "86",
    "City": "Cleveland",
    "Name": "Cavaliers",
    "Abbreviation": "CLE"
  },
  "homeTeam": {
    "ID": "105",
    "City": "Los Angeles",
    "Name": "Lakers",
    "Abbreviation": "LAL"
  },
  "location": "Staples Center"
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameOfTheNight: starterGame,
      games: []
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.loadNewGameOfTheNight();
    this.loadTonightsGames();
  }

  loadNewGameOfTheNight(gameId) {
    gameId = gameId || 1;
    const context = this;
    axios({
      method: 'get',
      url: `${REST_SERVER_URL}/${gameId}`,
    })
    .then((res)=> {
      context.setState({
        gameOfTheNight: res.data
      })
    })
    .catch(err => {
      console.log('Error in request ', err);
    })
  }

  loadTonightsGames() {
    const context = this;
    axios({
      method: 'get',
      url: REST_SERVER_URL,
    })
    .then((res)=> {
      console.log('Response ', res.data);
      context.setState({
        games: res.data
      })
    })
    .catch(err => {
      console.log('Error in request ', err);
    })
  }

  clickHandler(e) {
    console.log('eeeeeee ', e);
    this.setState({
      gameOfTheNight: e
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="ui grid">
          <div className="eight wide column">
            <GameOfTheNight game={this.state.gameOfTheNight} />
          </div>
          <div className="eight wide column">
            <GameList games={this.state.games} handler={this.clickHandler} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
