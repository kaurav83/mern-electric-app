import React from 'react';
import Slick from 'react-slick';
import {Link} from 'react-router-dom';

const SliderTemplates = (props) => {
    
    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,                 
        ...props.settings
    }

    switch(props.type) {
        case ("featured") :
            template = props.data.map((item, i) => {
                return (
                    <div key={item._id}>
                        <div className="featured__item">
                            <div className="featured__image"
                                style={{
                                    background: `url(${item.picture})`,
                                    height: "500px",
                                    "backgroundSize": "cover",
                                    "backgroundRepeat": "no-repeat"
                                }}
                            >
                            <div className="featured__card">
                                <p className="featured__title">
                                    {item.title}
                                </p>
                                <p className="featured__description">
                                    {item.description}
                                </p>
                                <Link to={`/services/${item._id}`} className="featured__link">
                                    <button className="featured__caption">
                                        Подробнее
                                    </button>
                                </Link>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                )
            })
            break;
        default:
            template = null;
    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
};

export default SliderTemplates;