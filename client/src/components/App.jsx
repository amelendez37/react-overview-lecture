import React from 'react';
import axios from 'axios';
import GameOfTheNight from './GameOfTheNight';
import GameList from './GameList';
import GameListEntry from './GameListEntry'

const REST_SERVER_URL = `http://localhost:3000/gameentry`;
const starterGame = {
  "id": "2",
  "scheduleStatus": "Normal",
  "originalDate": null,
  "originalTime": null,
  "delayedOrPostponedReason": null,
  "date": "2018-03-11",
  "time": "3:30PM",
  "awayTeam": {
    "ID": "89",
    "City": "Chicago",
    "Name": "Bulls",
    "Abbreviation": "CHI"
  },
  "homeTeam": {
    "ID": "91",
    "City": "Atlanta",
    "Name": "Hawks",
    "Abbreviation": "ATL"
  },
  "location": "Philips Arena"
}

class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currentGame: starterGame, 
        gameList: [],
      }
    }
  
    componentDidMount() {
      this.loadTonightsGames();
    }
  
    loadTonightsGames() {
      axios({
        method: 'get',
        url: REST_SERVER_URL,
      })
      .then((response) => {
        console.log('response: ', response);
      })
      .catch((err) => {
        console.error('');
      })
    }
  
    render() {
      return (
        <div>
          <h1>Tonight's NBA Game Schedule</h1>
          <div>
            <GameOfTheNight />
          </div>
          <div>
            <div>Games List Goes Here</div>
          </div>
        </div>
      );
    }
  }
  
  export default App;