import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticationAdmin } from '../actions';

export default function (ComposedAdminClass, reloadAdmin) {
    class AuthenticationCheckAdmin extends Component {
        state = {
            loadingAdmin: true
        }

        componentWillMount() {
            this.props.dispatch(authenticationAdmin());
        }

        componentWillReceiveProps(nextProps) {
            this.setState({
                loadingAdmin: false
            })
            if (!nextProps.admin.login.isAuth) {
                if (reloadAdmin) {
                    this.props.history.push('/login-admin')
                }
            } else {
                if (reloadAdmin === false) {
                    this.props.history.push('/dashboard')
                }
            }
        }

        render() {
            if (this.state.loadingAdmin) {
                return <div className="loader" style={{
                                                        position: 'absolute',
                                                        height: "30%",
                                                        left: '50%',
                                                        transform: 'translate(-50%, 50%)'
                                                        }}><img src={require('../images/preloader.gif')} alt="...Загрузка"/></div>
            }
            return (
                <div>
                    <ComposedAdminClass {...this.props} admin={this.props.admin} />
                </div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            admin: state.admin
        }
    }

    return connect(mapStateToProps)(AuthenticationCheckAdmin)
}