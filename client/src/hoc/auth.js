import React, { Component } from 'react';
import {authentication} from '../actions';
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
                return <div className="loader">Loading...</div>
            }
            
            return (
                <div>
                    <ComposedClass {...this.props} user={this.props.user} />
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