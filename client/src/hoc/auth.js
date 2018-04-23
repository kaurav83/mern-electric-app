import React, { Component } from 'react';
import {authentication} from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

export default function (ComposedClass, reload) {
    class AuthenticationCheck extends Component {

        state = {
            loading: true
        }

        componentWillMount() {
            this.props.dispatch(authentication());
        }

        componentWillReceiveProps(nextProps) {
            this.setState({loading: false});

            if (!nextProps.user.login.isAuth) {
                if (reload) {
                    this.props.history.push('/login-user');
                }
            } else {
                if (reload === false) {
                    this.props.history.push('/');
                }
            }
        }

        render() {
            if (this.state.loading) {
                return <div className="loader" style={{position: 'absolute',
                                                        height: "30%",
                                                        left: '50%', 
                                                        transform: 'translate(-50%, 50%)'}}>
                            <img src={require('../images/preloader.gif')} alt="...Загрузка"/>
                        </div>
            }
            
            return (
                <div>
                    <ReactCSSTransitionGroup
                        transitionAppear={true}
                        transitionAppearTimeout={600}
                        transitionEnterTimeout={600}
                        transitionLeaveTimeout={200}
                        transitionName={this.props.match.path === '/prices' 
                                                                || '/' 
                                                                || '/articles' 
                                                                || '/dashboard' 
                                                                || '/feedback' 
                                                                || '/register'
                                                                || '/user/logout'
                                                                || '/login-user'
                                                                || '/login-admin'
                                                                || '/services/:topicId'
                                                                || '/dashboard' ?
                                                                     'SlideIn' : 'SlideOut'}
                    >
                    <ComposedClass {...this.props} user={this.props.user} />
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck);
} 