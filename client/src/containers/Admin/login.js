import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginAdmin} from '../../actions';

class LoginAdmin extends Component {

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
        if (nextProps.admin.login.isAuth) {
            this.props.history.push('/dashboard')
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(loginAdmin(this.state))
    }

    render() {
        let admin = this.props.admin;
        return (
            <div className="form-container">
                <div className="form-table-view">
                   <form onSubmit={this.submitForm} 
                        className="form-auth"
                   >
                    <h2 className="form-auth__title">Авторизация admin</h2>
                    <div className="form-auth__element">
                        <input 
                            type="email"
                            placeholder="Введите ваш email"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                            className="form-auth__input form-auth__input--modif"
                        />
                    </div>
                    <div className="form-auth__element">
                        <input 
                            type="password"
                            placeholder="Введите пароль"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                            className="form-auth__input"
                        />
                    </div>
                    <button className="form-auth__button" type="submit">Отправить</button>
                    <div className="error">
                        {
                            admin.login ? 
                                <div>
                                    {admin.login.message}
                                </div>    
                            : null
                        }
                    </div>
                </form> 
                </div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps)(LoginAdmin);