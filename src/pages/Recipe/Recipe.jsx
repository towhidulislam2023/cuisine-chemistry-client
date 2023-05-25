/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import DisplayRecipeData from '../DisplayRecipeData/DisplayRecipeData';
import { ScrollRestoration } from 'react-router-dom';

const Recipe = ({ recipeData }) => {
    // only use in secondary layout chefsDatials
    console.log(recipeData);
    return (
        <div className='my-52 md:my-0'>
            <h1 className='text-center text-4xl font-bold border-b-2 pb-5'>Chef's recipes</h1>
            <div className='md:w-[50%] mx-auto px-7 my-5'>
                {
                    recipeData && recipeData.map(recipe => <DisplayRecipeData key={recipe.id} recipe={recipe}></DisplayRecipeData>)
                }
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default Recipe;