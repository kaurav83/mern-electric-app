import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAdminPosts } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class AdminPosts extends Component {

    componentWillMount() {
        this.props.dispatch(getAdminPosts(this.props.admin.login.id));
    }

    showAdminPosts = (admin) => {
        return (
            admin.adminPosts ?
                admin.adminPosts.map((item) => (
                    <tr key={item._id} className="admin-posts-table__tr">
                        <td className="admin-posts-table__td">
                            <Link
                                to={`/admin-posts/edit-post/${item._id}`}
                            >
                                {item.name}
                            </Link>
                        </td>
                        <td className="admin-posts-table__td">{item.author}</td>
                        <td className="admin-posts-table__td">{moment(item.createAt).format("DD.MM.YY")}</td>
                    </tr>
                )
                )
                :
                null
        )

    }

    render() {
        let admin = this.props.admin;
        
        return (
            <div className="admin-posts">
                <h4 className="admin-posts__title">Ваши обзоры</h4>
                <table className="admin-posts-table">
                    <thead className="admin-posts-table__thead">
                        <tr className="admin-posts-table__tr">
                            <th className="admin-posts-table__th">Имя</th>
                            <th className="admin-posts-table__th">Автор</th>
                            <th className="admin-posts-table__th">Дата</th>
                        </tr>
                    </thead>
                    <tbody className="admin-posts-table__tbody">
                        {this.showAdminPosts(admin)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        admin: state.admin
    }
}

export default connect(mapStateToProps)(AdminPosts);