import React from 'react';
import PageSpinner from './components/PageSpinner';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';
 
const SignIn = React.lazy(() => import('./components/auth/login'));
const SignUp = React.lazy(() => import('./components/auth/SignUp'));
 
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
              </React.Suspense>
          </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
