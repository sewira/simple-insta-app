import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import postImage from '../components/post/post.js';
import Main from '../pages/Main/index.jsx'





const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/postImage' exact component={postImage} />
                </Switch>
            </Router>
        </>
    );
}

export default Routes;
