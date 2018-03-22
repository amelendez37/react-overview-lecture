import React from 'react';
import axios from 'axios';

import NavBar from './NavBar.jsx';
import GameOfTheNight from './GameOfTheNight.jsx';
import GameList from './GameList.jsx';

const REST_SERVER_URL = `http://localhost:3000/gameentry`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameOfTheNight: {},
      games: []
    };
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
      console.log('Response ', res.data);
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

  render() {
    return (
      <div>
        <NavBar />
        <div className="ui grid">
          <div className="eight wide column">
            <GameOfTheNight game={this.state.gameOfTheNight} />
          </div>
          <div className="eight wide column">
            <GameList games={this.state.games} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
