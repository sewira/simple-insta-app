import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import postImage from '../components/post/post.js';
import { Login, Main, Register } from '../pages/index.js';
import { isLogin } from '../redux/reducers/userReducer.js';
const Routes = () => {
  const login = useSelector(isLogin);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Main} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
