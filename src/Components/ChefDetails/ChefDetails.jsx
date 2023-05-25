/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { ScrollRestoration, useLoaderData, useParams } from 'react-router-dom';
import ChefDatailsBannar from '../../pages/ChefDatailsBannar/ChefDatailsBannar';
import Recipe from '../../pages/Recipe/Recipe';
import LazyLoad from 'react-lazy-load';


const ChefDetails = () => {
    const recipeData=useLoaderData()
    const [chefData,setChefData]=useState(null)
    const {id}= useParams()
    console.log(id);
    useEffect(()=>{
        fetch(`https://cuisine-chemistry-server-towhidulislam2023.vercel.app/chefs/${id}`)
        .then(res=>res.json())
            .then(data => setChefData(data))
    },[])

    return (
        <div>
            <ChefDatailsBannar chefData={chefData} ></ChefDatailsBannar>
            <div className='h-20 md:h-0'>

            </div>
            <LazyLoad><Recipe recipeData={recipeData}></Recipe></LazyLoad> 
            <ScrollRestoration />
        </div>
    );
};

export default ChefDetails;