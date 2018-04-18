import React from 'react';

const User = (props) => {
    let user = props.user.login;
    return (
        <div>
            <div className="user__container">
                <div className="avatar">
                    <img src={require("../../images/avatar.png")} style={{width: "15rem"}} alt="avatar"/>
                </div>
                <div className="nfo">
                    <div><span>Name:</span> {user.name}</div>
                    <div><span>Lastname:</span> {user.lastname}</div>
                    <div><span>Email:</span> {user.email}</div>
                </div>
            </div>
        </div>
    );
};

export default User;