import React from 'react';
import axios from 'axios';


const LogoutUser = (props) => {
    axios.get(`/api/logout`)
                .then(request => {
                    setTimeout(() => {
                        props.history.push('/')
                    }, 2000)
                })
    return (
        <div className="logout_container" style={{
                                                    textAlign: "center",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "1.5rem",
                                                    fontFamily: 'Oswald',
                                                    minHeight: "10rem",
                                                    transform: "translateY(50%)"
                                                }}>
            Жаль, что Вы нас покидаете :(
        </div>
    );
};

export default LogoutUser;