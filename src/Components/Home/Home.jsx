/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Header from '../../shearedPages/Header/Header';
import HomeBannar from '../../pages/HomeBannar/HomeBannar';
import { useLoaderData } from 'react-router-dom';
import ChefsData from '../../pages/chefsData/ChefsData';
import LazyLoad from 'react-lazy-load';
import FoodData from '../../pages/FoodData/FoodData';
import Carusole from '../../pages/Carusole/Carusole';


const Home = () => {
    const chefsData=useLoaderData()
    return (
        <div className=''>
            <HomeBannar></HomeBannar> 
            <LazyLoad><ChefsData chefsData={chefsData}></ChefsData></LazyLoad> 
            <FoodData></FoodData>
            <Carusole></Carusole>
        </div>
    );
};

export default Home;