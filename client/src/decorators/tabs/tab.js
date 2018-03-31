import React from 'react';

const Tab = (props) => {
    const {tabtext, icon, activetab, cardindex, onClick} = props;
    const isActive = activetab === cardindex ? ' active' : '';
    return (
        <div className={`tab${isActive}`} onClick={onClick}>
            {/* {icon? <FontAwesome icon={Icons[`fa${icon}`]} /> : ''} */}
            {tabtext}
        </div>
    );
};

export default Tab;

// EXAMPLE FOR USE
// import React from 'react';
// import GoogleMap from './google_map';
// import TabPanel from '../../decorators/tabs/tabPanel';

// const Feedback = () => {
//     return (
//         <div>
//         <TabPanel style={{ height: '400px', width: '600px' }}>
//             <div tabtext="Home">
//                 <div><GoogleMap /></div>
//             </div>
//             <div tabtext="User">
//                 ... and the second panel
//             </div>
//         </TabPanel>
        
//         </div>
//     );
// };

// export default Feedback;