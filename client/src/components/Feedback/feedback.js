import React from 'react';
import GoogleMap from './google_map';
import ContactForm from './contact_form';
import Requesites from './requesites';

const Feedback = () => {
    return (
        <div>
            <h2 className="feedback-title">Контакты</h2>
            <div className="feedback">
                <div className="feedback__location">
                    <div><Requesites /></div>
                    <div style={{width: "25rem"}} ><GoogleMap /></div>
                </div>
                <div  className="feedback__contactForm">
                    <ContactForm />
                </div>
            </div>
        </div>
        
    );
};

export default Feedback;