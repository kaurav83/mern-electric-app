import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getArticles} from '../actions';
import ArticleItem from './../components/Articles/article_item';

class ArticlesContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getArticles(8, 0, 'desc'));
    }

    renderItems = (article) => {
        return (
            article.list ? 
                article.list.map(item => {
                   return (
                       <ArticleItem {...item} key={item._id} />
                   )
                })
            : null
        )
    }

    loadMore = () => {
        let count = this.props.article.list.length;
        this.props.dispatch(getArticles(1, count, 'desc', this.props.article.list));
    }

    render() {
        
        return (
            <div className="articles">
                <ul className="articles__list">
                    {this.renderItems(this.props.article)}
                </ul>
                <div 
                    className="articles__loadmore"
                    onClick={this.loadMore}
                >
                    Загрузить еще статьи
                </div>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return {
        article: state.articles
    }
}

export default connect(mapStateToProps)(ArticlesContainer);