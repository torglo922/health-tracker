import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ImplicitCallback, SecureRoute, Security } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Points from './Points';

function onAuthRequired({history}) {
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security issuer='https://dev-278255.okta.com/oauth2/default'
                  client_id='{yourClientId}'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired}>
          <Route path='/' exact={true} component={Home}/>
          <SecureRoute path='/points' component={Points}/>
          <Route path='/login' render={() => <Login baseUrl='https://dev-278255.okta.com'/>}/>
          <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router>
    );
  }
}

export default App;