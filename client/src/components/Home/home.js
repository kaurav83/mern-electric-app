import React, { Component } from 'react';
import Slider from '../../widgetsUI/slider';
import HomeTitle from './homeTitle';
import ItemsService from './itemsService';
import Prerequisites from './prerequisites';
import ListAdvantage from './listAdvantage';
import ContactForm from '../Feedback/contact_form';
import { connect } from 'react-redux';
import { getArticles } from '../../actions';
import {Link} from 'react-router-dom';

class Home extends Component {

    componentWillMount() {
        this.props.dispatch(getArticles(10, 0, 'desc'));
    }

    sidebarArticles = () => {
        return (
            this.props.user.login.isAuth ?
                this.props.listArticles.list ?
                    <ul className="isAuth-user__list">
                        {
                            this.props.listArticles.list.map((item, _id) => {
                                return (
                                <li key={item._id} className="isAuth-user__item">
                                    <Link to={`/articles/${item._id}`}
                                            className="isAuth-user__link"
                                    >{item.name}</Link>
                                </li>
                                )
                            })
                        }
                    </ul>
                    : null
                : null
        )
    }

    render() {
        return (
            <div>
                <Slider
                    type="featured"
                    start={0}
                    amount={5}
                    setting={{
                        dots: true
                    }}
                />
                <HomeTitle dataAuth={this.props} />
                {
                    this.props.user.login.isAuth ?
                        <div className="isAuth-user">
                            <div className="isAuth-user__block">
                                <h2 className="isAuth-user__title">Новые статьи</h2>
                                {this.sidebarArticles()}
                            </div>
                            <div className="isAuth-user__items-service">
                                <ItemsService />
                                
                            </div>
                        </div>
                        : <div>
                            <ItemsService />
                            
                        </div>
                }
                    <Prerequisites />
                    <ListAdvantage />
                    <ContactForm />

            </div>
        );
    }

};

function mapStateToProps(state) {
    return {
        listArticles: state.articles
    }
}

export default connect(mapStateToProps)(Home);