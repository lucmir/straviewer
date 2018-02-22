import React, { Component } from 'react';
import { Grid, Divider, Header, Container, Button, Segment } from 'semantic-ui-react';

class Login extends Component {
render = () => {
  return (
    <div>
      <Divider hidden section />
      <Grid columns={1} centered>
        <Container>
          <Header as='h3'>Login and Authorization</Header>
          We need your approval to connect with <i>Strava</i>.<br />
          Only read access to your data will be required.
        </Container>

        <Segment padded>
          <Button size="huge" className="orange" float>
            <i class="strava icon"></i>
            Login with Strava
          </Button>
          <p>
           <small>*You will be redirected to Strava's login page</small>
          </p>
        </Segment>

        <Container>
          No personal data will be kept or shared, we promise!
        </Container>
      </Grid>
    </div>
    );
  }
}

export default Login;
