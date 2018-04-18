import React, { Component } from 'react';
import { getArticleWithAdmin, clearArticleWithAdmin } from '../../actions';
import { connect } from 'react-redux';
import moment from 'moment-js';

class ArticleView extends Component {
    componentWillMount() {
        this.props.dispatch(getArticleWithAdmin(this.props.match.params.articleId))
    }

    componentWillUnmount() {
        this.props.dispatch(clearArticleWithAdmin());
    }

    renderArticle = (articles) => {
        return (
            articles.article ?
                <div className="article-container">
                    <div className="article">
                        <h2 className="article__title">{articles.article.name}</h2>
                        <h5 className="article__author">{articles.article.author}</h5>
                        <p>{moment(articles.article.createAt).format("DD.MM.YY")}</p>
                        {/* <p className="article__reviewer">Обзор: <span>{articles.admin.name} {articles.admin.lastname}</span></p> */}
                    </div>
                    <p className="article-review">
                       Текс (контент): {articles.article.review}
                    </p>
                    <div className="article-rating">
                       Рейтинг статьи: {articles.article.rating}
                    </div>
                </div>

                : null
        );
    }

    render() {
        let articles = this.props.articles;
        return (
            <div className="articles">
                {this.renderArticle(articles)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleView);