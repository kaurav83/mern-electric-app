import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/layout';
import Prices from './components/Prices/prices';
import Portfolio from './components/Portfolio/portfolio';
import Articles from './components/Articles/articles';
import Reviews from './components/Reviews/reviews';
import Fooldesk from './components/Fooldesk/fooldesk';
import Dashboard from './components/Dashboard/dashboard';
import Feedback from './components/Feedback/feedback';
// import Register from './components/Register/register';
// import Login from './components/Login/login';
import Service from './components/Services/service';
import ArticleView from './components/Articles/article_view';
import LoginAdmin from './containers/Admin/login';
import LoginUser from './containers/User/login_user';
import User from './components/Admin/index';
import AdminPosts from './components/Admin/adminposts';
import EditArticle from './containers/Admin/edit';
import Register from './containers/User/register';
import Logout from './containers/User/logout';

import Auth from './hoc/auth';
import AuthAdmin from './hoc/auth_admin';

const Routes = () => {

    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home, null)} />
                <Route path="/prices" exact component={Prices} />
                <Route path="/portfolio" exact component={Portfolio} />
                <Route path="/articles" exact component={Auth(Articles, true)} />
                <Route path="/reviews" exact component={Reviews} />
                <Route path="/fooldesk" exact component={Fooldesk} />
                <Route path="/dashboard" exact component={AuthAdmin(Dashboard, true)} />
                <Route path="/feedback" exact component={Feedback} />
                {/* <Route path="/register" exact component={Register} /> */}
                {/* <Route path="/login" exact component={Login} /> */}
                <Route path="/services/:topicId" exact component={Service} />
                <Route path="/articles/:articleId" exact component={ArticleView} />
                <Route path="/login-admin" exact component={AuthAdmin(LoginAdmin, false)} />
                <Route path="/login-user" exact component={Auth(LoginUser, false)} />
                <Route path="/user" exact component={Auth(User, true)}/>
                <Route path="/admin-posts" exact component={AuthAdmin(AdminPosts, null)} />
                <Route path="/admin-posts/edit-post/:id" exact component={AuthAdmin(EditArticle, true)} />
                <Route path="/register" exact component={Auth(Register, true)} />
                <Route path="/user/logout" exact component={Auth(Logout, true)} />
            </Switch>
        </Layout>
    );
}

export default Routes;