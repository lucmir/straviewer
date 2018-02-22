import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { Header, Container, Divider } from 'semantic-ui-react';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header as='h1' textAlign='center'>
          STRAVIEWER
          <Header.Subheader>
            Follow your performance
          </Header.Subheader>
        </Header>
        <Divider section/>
        <Container>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
