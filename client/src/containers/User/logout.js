import React from 'react';
import axios from 'axios';


const LogoutUser = (props) => {
    let request = axios.get(`/api/logout`)
                .then(request => {
                    setTimeout(() => {
                        props.history.push('/')
                    }, 2000)
                })
    return (
        <div className="logout_container">
            Жаль, что Вы нас покидаете :(
        </div>
    );
};

export default LogoutUser;