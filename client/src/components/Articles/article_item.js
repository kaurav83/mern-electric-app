import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment-js';

const ArticleItem = (item) => {
    return (
        <li className="articles__item">
            <Link to={`/articles/${item._id}`} className="article__link">
                <h2 className="articles__title"><i className="fa fa-chain"></i> {item.name}</h2>
                {/* <div className="article__author">{item.author}</div> */}
            </Link>
            <div className="articles__date">{moment(item.createdAt).format("DD.MM.YY")}</div>
            <p className="articles__review">
                {
                    item.review.length <= 500 ? 
                        item.review 
                        :
                        <span>
                            {item.review.substring(0, 500)} <Link to={`/articles/${item._id}`}
                                className="articles__readMore"
                                >...Читать далее</Link>
                        </span> 
                }
                
            </p>
        </li>
        
    );
};

export default ArticleItem;