import React, { Component } from 'react';
import SliderTemplates from './slider_templates';
import axios from 'axios';


class Slider extends Component {
    state = {
        news: []
    }

    componentWillMount() {
        axios.get(`/api/slides?_start=${this.props.start}&_end=${this.props.amount}`)
            .then(response => {
                this.setState({
                    news: response.data
                })
            })
    }
    render() {

        return (
            <div className="featured">
                <ul className="featured__contact-list">
                    <li className="featured__contact-item"><i className="featured__contact-fa fa fa-phone"></i><a href="tel:+7998909591981"> 7 (99890) 95 91 981</a></li>
                    <li className="featured__contact-item"><i className="featured__contact-fa fa fa-phone"></i><a href="tel:+998317591043"> (998) 317 59 10 43</a></li>
                    <li className="featured__contact-item"><i className="featured__contact-fa fa fa-envelope-o"></i><a href="mailto:igumov38@yandex.ru"> igumov38@yandex.ru</a></li>
                </ul>
                <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings} />
            </div>
        );
    }
}

export default Slider;