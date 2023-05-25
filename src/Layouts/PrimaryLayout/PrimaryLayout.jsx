/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../shearedPages/Header/Header';
import Footer from '../../shearedPages/Footer/Footer';

const PrimaryLayout = () => {
    const navigation=useNavigate()
    return (
        <div>
            {/* primaryLAyout  */}
            <Header></Header>
            {
                navigation.state === "loading" ? <div className='flex justify-center items-center h-screen'><progress className="progress w-56 "></progress></div> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default PrimaryLayout;