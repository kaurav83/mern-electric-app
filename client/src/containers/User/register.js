import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getUsers, userRegister, authenticationAdmin } from '../../actions';
import {Link} from 'react-router-dom';


class Register extends PureComponent {

    state = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    }

    componentWillMount() {
        this.props.dispatch(getUsers());
        this.props.dispatch(authenticationAdmin());
    }

    hendleInputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    hendleInputLastname = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    hendleInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    hendleInputPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.register === false) {
            this.setState({ error: 'Ошибка! Попробуйте еще раз' })
        } else {
            this.setState({
                name: '',
                lastname: '',
                email: '',
                password: ''
            })
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({
            error: ''
        })

        this.props.dispatch(userRegister({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastname: this.state.lastname
        }, this.props.user.users))
    }

    showUsers = (user) => {
        return (user.users ?
            user.users.map(item => (
                <tr key={item._id}>
                    <td><Link to={`/user`}>{item.name}</Link></td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                </tr>
            ))
            : null
        )
    }

    render() {
        let user = this.props.user;
        return (
            <div className="form-container">
                <div className="form-table-view">
                    <form onSubmit={this.submitForm}
                        className="form-auth"
                    >
                        <h2 className="form-auth__title">Зарегистрироваться</h2>

                        <div className="form-auth__element">
                            <input
                                type="text"
                                placeholder="Введите имя"
                                value={this.state.name}
                                onChange={this.hendleInputName}
                                className="form-auth__input form-auth__input--modif"
                                required
                            />
                        </div>
                        <div className="form-auth__element">
                            <input
                                type="text"
                                placeholder="Введите фамилию"
                                value={this.state.lastname}
                                onChange={this.hendleInputLastname}
                                className="form-auth__input"
                                required
                            />
                        </div>
                        <div className="form-auth__element">
                            <input
                                type="email"
                                placeholder="Введите адрес электронной почты"
                                value={this.state.email}
                                onChange={this.hendleInputEmail}
                                className="form-auth__input"
                                required
                            />
                        </div>
                        <div className="form-auth__element">
                            <input
                                type="password"
                                placeholder="Введите пароль"
                                value={this.state.password}
                                onChange={this.hendleInputPassword}
                                className="form-auth__input"
                                required
                            />
                        </div>

                        <button type="submit" className="form-auth__button">Отправить</button>
                        <div className="error">{this.state.error}</div>
                    </form>
                    {
                        this.props.admin.login ?
                            this.props.admin.login.isAuth ?
                                <div className="current_users">
                                    <h4>Текущий пользователь</h4>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Имя</th>
                                                <th>Фамилия</th>
                                                <th>Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.showUsers(user)}
                                        </tbody>
                                    </table>
                                </div>
                                : null
                            : null
                    }

                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        admin: state.admin
    }
}

export default connect(mapStateToProps)(Register);