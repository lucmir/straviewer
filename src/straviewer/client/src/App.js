import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: []
  }

  componentDidMount = () => {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">STRAVIEWER</h1>
        </header>
        <p className="App-intro">
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
        </p>
      </div>
    );
  }
}

export default App;
