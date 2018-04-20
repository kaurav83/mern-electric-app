import React from 'react';

const SocialNetwork = () => {
    return (
        <div className="social-block">
            <ul className="social">
                <li className="social__item">
                    <a href="https://www.facebook.com/"  className="social__link"><i className="fa fa-facebook-square"></i></a>
                </li>
                <li className="social__item">
                    <a href="https://vk.com/" className="social__link"><i className="fa fa-vk"></i></a>
                </li>
                <li className="social__item">
                    <a href="https://ok.ru/" className="social__link"><i className="fa fa-odnoklassniki-square"></i></a>
                </li>
                <li className="social__item">
                    <a href="https://twitter.com/" className="social__link"><i className="fa fa-twitter-square"></i></a>
                </li>
                <li className="social__item">
                    <a href="https://www.youtube.com/" className="social__link"><i className="fa fa-youtube-square"></i></a>
                </li>
                <li className="social__item">
                    <a href="https://www.instagram.com/" className="social__link"><i className="fa fa-instagram"></i></a>
                </li>
            </ul>
        </div>
    );
};

export default SocialNetwork;