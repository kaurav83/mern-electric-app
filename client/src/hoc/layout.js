import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
// import Service from '../components/Services/service';

const Layout = (props) => {
    return (
        <div className="wrapper">
            <Header props={props} />
            <main className="content">
                {props.children}
            </main>
            <Footer />
            
        </div>
    );
};

export default Layout;