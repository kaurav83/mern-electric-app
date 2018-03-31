import React, { Component } from 'react';
import axios from 'axios';

class PrerequisitesDop extends Component {
    state = {
        prerequisitesListDop: []
    }
    componentWillMount() {
        axios.get('/api/home')
            .then(response => {
                this.setState({
                    prerequisitesListDop: response.data
                })
            })
    }
    render() {
        return (
            <div  className="prerequisites__Dop">
                {
                    this.state.prerequisitesListDop.map((item, _id) => {
                        return (
                            <div key={item._id}>
                                <h3 className="prerequisites__title-second">{item.nextSection2[0].title}</h3>
                                <p className="prerequisites__text-second">{item.nextSection2[0].text}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default PrerequisitesDop;