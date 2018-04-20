import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../../actions';

class LoginUser extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        success: false
    }

    handleInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.login.isAuth) {
            this.props.history.push('/');
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }

    render() {
        
        let user = this.props.user;
        return (
            <div className="login-container">
                <form onSubmit={this.submitForm}>
                    <h2>Авторизация User</h2>
                    <div className="form-element">
                        <input
                            type="email"
                            placeholder="Введите ваш email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>
                    <div className="form-element">
                        <input
                            type="password"
                            placeholder="Введите пароль"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>
                    <button className="form-button" type="submit">Войти</button>
                    <div className="error">
                        {
                            user.login ?
                                <div>
                                    {user.login.message}
                                </div>
                                : null
                        }
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoginUser);