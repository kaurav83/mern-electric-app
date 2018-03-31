import React from 'react';
import Slider from '../../widgetsUI/slider';
import HomeTitle from './homeTitle';
import ItemsService from './itemsService';
import Prerequisites from './prerequisites';
import ListAdvantage from './listAdvantage';
import ContactForm from '../Feedback/contact_form';

const Home = () => {
    return (
        <div>
            <Slider 
                type="featured"
                start={0}
                amount={5}
                setting = {{
                    dots: true
                }}
            />
            <HomeTitle />
            <ItemsService />
            <Prerequisites />
            <ListAdvantage />
            <ContactForm />
        </div>
    );
};

export default Home;