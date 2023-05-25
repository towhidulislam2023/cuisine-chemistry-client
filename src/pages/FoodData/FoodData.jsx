/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const FoodData = () => {
    // use in home components
    const [foodData,setFoodData]=useState([])
    useEffect(()=>{
        fetch("https://cuisine-chemistry-server-towhidulislam2023.vercel.app/food")
        .then(res=>res.json())
            .then(data => setFoodData(data))
    },[])
    return (
        <div className='bg-gray-200 md:w-[75%] mx-auto my-16 p-6 pb-11 rounded-lg z-0'>
            <div className=''>
                <h1 className="text-4xl font-bold py-7 px-3">Popular recipes</h1>
                <p className='pb-7 px-3'>American cuisine was influenced by Europeans and Native Americans in its early history.</p>
                <div className='grid md:grid-cols-6 gap-6 px-3'>
                    {
                        foodData && foodData.map(food => <div key={food.food_id} className="card w bg-base-100 shadow-xl image-full z-0">
                            <figure><img  src={food.food_image} alt="" /></figure>
                            <div className="card-body px-4 ">
                                <h2 className="card-title">{food.food_name}</h2>
                                <p>{food.description.slice(0, 90)}...</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodData;