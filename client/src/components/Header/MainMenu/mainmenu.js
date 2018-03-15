import React from 'react';
import MainMenuItems from './mainmenu_items';

const MainMenu = (props) => {
    return (
        <div className="mainMenuContainer">
            <MainMenuItems props={props} />
        </div>
    );
};

export default MainMenu;