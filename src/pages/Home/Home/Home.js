import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Heading from '../Heading/Heading';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Heading></Heading>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;