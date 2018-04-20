import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment-js';

const ArticleItem = (item) => {
    return (
        <li className="article__item">
            <Link to={`/articles/${item._id}`} className="article__link">
                <h2 className="article__title">{item.name}</h2>
                {/* <div className="article__author">{item.author}</div> */}
            </Link>
            <div>{moment(item.createdAt).format("DD.MM.YY")}</div>
            <p className="article__review">{
                item.review.length <= 500 ? 
                    item.review 
                    :
                    <span>
                        {item.review.substring(0, 500)} <Link to={`/articles/${item._id}`}>...Читать далее</Link>
                    </span> 
                    
                }
                
            </p>
        </li>
        
    );
};

export default ArticleItem;