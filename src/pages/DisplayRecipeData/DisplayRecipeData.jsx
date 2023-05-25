/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';
import { ScrollRestoration } from 'react-router-dom';
const DisplayRecipeData = ({ recipe }) => {
    // use in recipe Components 
    const [disableButton,setDisableButton]=useState(false)
    const handelFavoriteRecipe=()=>{
        toast("You have added this recipe to Your favorites")
        setDisableButton(true)
    }

    return (
        <div className="card  bg-base-100 shadow-xl my-11">
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{recipe.recipeName}</h2>
                <h1 className='text-2xl font-semi-bold'>ingredients:</h1>
                <div>
                    {
                        recipe.ingredients.map((ingredent,idx)=><li key={idx}>{ingredent}</li>)
                    }
                </div>
                <h1 className='text-2xl font-semi-bold'>Cooking method:</h1>
                <p>{recipe.cookingMethod}</p>
                <div className="card-actions justify-between items-center">
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(recipe.rating)} readOnly />
                    <span className='flex-grow'>{recipe.rating}</span>
                    <button onClick={handelFavoriteRecipe} disabled={disableButton} className="btn btn-warning"> Favorite</button>
                </div>
            </div>
            <ToastContainer />
            <ScrollRestoration />
        </div>
    );
};

export default DisplayRecipeData;