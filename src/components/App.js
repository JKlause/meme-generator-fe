import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import Signup from '../containers/SignUp';
import Signin from '../containers/SignIn';
import MemeContainer from '../containers/MemeContainer';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch;

  useEffect(()=> {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  if(loading) return <h1>Loading...</h1>;

  if(!loading && !sessionId) return <Redirect to="/signin"/>;

  return <Route {...rest} />;
};

export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={MemeContainer}/>
        <PrivateRoute path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
      </Switch>
    </Router>
  );
}
