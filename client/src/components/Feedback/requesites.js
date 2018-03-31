import React from 'react';

const Requesites = () => {
    return (
        <div className="requisites">
            <p className="requisites__text"><strong>
            <i className="requisites-icon fa fa-street-view"></i> Адрес:</strong><span>г. Ташкент, ул. Айбека 49</span>
            </p>
            <dl className="requisites__phones">
                <dt><strong><i className="requisites-icon fa fa-phone"></i> Телефоны:</strong></dt>
                <dd><a href="tel:+7998909591981">7 (99890) 95 91 981</a></dd>
                <dd><a href="tel:+998317591043">(998) 317 59 10 43</a></dd>
            </dl>
            <p className="requisites__text"><strong>
                <i className="requisites-icon fa fa-male"></i> Мастер:</strong><span> Ислом</span>
            </p>
            <p  className="requisites__email">
                <strong><i className="requisites-icon fa fa-envelope-o"></i> Email:</strong><a href="mailto:igumov38@yandex.ru">igumov38@yandex.ru</a>
            </p>
        </div>
    );
};

export default Requesites;