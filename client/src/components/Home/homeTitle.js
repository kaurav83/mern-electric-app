import React from 'react';

const HomeTitle = ({dataAuth}) => {
    return (
        <div className="home-title">
            {
                dataAuth.user.login ?
                    dataAuth.user.login.isAuth ?
                        <h3 className="home-title__past-slider" style={{fontSize: "1.2rem"}}>
                            Электромонтажные работы европейского стандарта
                        </h3>
                    :   <h3 className="home-title__past-slider">
                            Электромонтажные работы европейского стандарта
                        </h3>
                :   <h3 className="home-title__past-slider">
                        Электромонтажные работы европейского стандарта
                    </h3>
            }
            
        </div>
    );
};

export default HomeTitle;