import React from 'react';

const Service = (props) => {
    const {topicId} = props.match.params;
    return (
        <div>
            <h3>{topicId}</h3>
            Some text
        </div>
    );
};

export default Service;