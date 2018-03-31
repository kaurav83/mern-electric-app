import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/layout';
import Prices from './components/Prices/prices';
import Portfolio from './components/Portfolio/portfolio';
import Articles from './components/Articles/articles';
import Reviews from './components/Reviews/reviews';
import Fooldesk from './components/Fooldesk/fooldesk';
import About from './components/About/about';
import Feedback from './components/Feedback/feedback';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Service from './components/Services/service';
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/prices" exact component={Prices} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/articles" exact component={Articles} />
                <Route path="/reviews" exact component={Reviews} />
                <Route path="/fooldesk" exact component={Fooldesk} />
                <Route path="/about" exact component={About} />
                <Route path="/feedback" exact component={Feedback} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/services/:topicId" exact component={Service} />
            </Switch>
        </Layout>
    );
}

export default Routes;