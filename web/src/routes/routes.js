import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import postImage from '../components/post/post.js';
import { Login, Main, Register } from '../pages/index.js';
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/postImage" exact component={postImage} />
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
