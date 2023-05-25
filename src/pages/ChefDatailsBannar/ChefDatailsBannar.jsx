/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const ChefDatailsBannar = ({ chefData }) => {
    // it use in recipe components 
    console.log(chefData);
    return (
       <LazyLoad height={400} >
        <div className="hero md:h-[] bg-base-100 mt-20 mb-44">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-96' src={chefData && chefData.chefPicture} />
                <div>
                    <h1 className="text-5xl font-bold">{chefData && chefData.chefName}</h1>
                    <p className="py-6">{chefData && chefData.description}</p>
                    <p className='py-2'> Number of recipes: {chefData && chefData.numRecipes}</p>
                    <p className='py-2'> Years of experience: {chefData && chefData.yearsOfExperience}</p>
                    <div className='flex items-center gap-6 my-6'>
                        <button className="btn btn-primary"><FaThumbsUp className='text-4xl'></FaThumbsUp></button> <span className='text-3xl'>{chefData && chefData.likes}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        </LazyLoad>
    );
};

export default ChefDatailsBannar;