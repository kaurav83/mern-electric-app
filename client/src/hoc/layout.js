import React from 'react';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';

const Layout = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="content">
                {props.children}
            </main>
            <Footer />

        </div>
    );
};

export default Layout;