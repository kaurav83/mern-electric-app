import React, { Component } from 'react';
import axios from 'axios';
import PrerequisitesDop from './prerequisitesDop';

class Prerequisites extends Component {
    state = {
        prerequisitesList: []
    }

    componentWillMount() {
        axios.get('/api/home')
            .then(response => {
                this.setState({
                    prerequisitesList: response.data
                })
            })
    }
    render() {
        return (
            <div className="prerequisites">
                {
                    this.state.prerequisitesList.map((item, _id) => {
                        return (
                            <div key={item._id}>
                                <h3 className="prerequisites__title title home-title">
                                    {item.nextSection[0].title}
                                </h3>
                                <div className="prerequisites__wrap">
                                    
                                    <div className="prerequisites__picture">
                                        <img src={item.nextSection[0].picture}
                                            className="prerequisites__img"
                                            alt="pic"
                                        />
                                    </div>
                                    <p className="prerequisites__text">
                                        {item.nextSection[0].text}
                                    </p>
                                    <PrerequisitesDop />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Prerequisites;