/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../../shearedPages/Header/Header';
import Footer from '../../shearedPages/Footer/Footer';

const SecondaryLayout = () => {
    const navigation=useNavigation()
    console.log(navigation);
    return (
        <div className=''>
            <Header></Header>
            {/* secondary layout  */}
            {
                navigation.state === "loading" ? <div className='flex justify-center items-center h-screen'><progress className="progress w-56 "></progress>
                </div> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default SecondaryLayout;