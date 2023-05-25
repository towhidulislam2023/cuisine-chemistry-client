/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';


const DisplayChefsData = ({ chefdata }) => {
    // use in Home Components 
    return (
       
        <div className="card md:w-[24rem] bg-base-100 shadow-xl">
            <figure><LazyLoad height={200}><img className='' src={chefdata.chefPicture} alt="" /></LazyLoad></figure>
            <div className="card-body">
                <h2 className="card-title ">
                    {chefdata.chefName}
                    <div className="badge badge-secondary">EXPART</div>
                </h2>
                <p className='text-lg text-black'>Years of experience: {chefdata.yearsOfExperience} years</p>
                <p className='text-lg text-black'>Number of recipes: {chefdata.numRecipes}</p>
                <div className="card-actions items-center">
                    <div className=""><FaThumbsUp className='text-blue-700 text-3xl'></FaThumbsUp></div>
                    <div className="badge badge-outline">{chefdata.likes}</div>
                </div>
                <Link to={`/recipe/${chefdata.chef_recipe_id}`}>  <button
                 
                 className='w-[100%] btn mt-5 btn-warning font-bold'>View Recipes</button></Link> 
            </div>
            </div>
    );
};

export default DisplayChefsData;