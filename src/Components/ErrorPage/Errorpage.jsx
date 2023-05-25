/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
    const navigate = useNavigate()
    const handalGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='h-screen  flex justify-center items-center flex-col'>
            <img className='h-96 w-96' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1680593589~exp=1680594189~hmac=f014fc40cccf366567bde690160613634e66ee9b679c13fbfe4c37136277637d" alt="" />
            <h1 className='text-7xl text-center font-bold text-red-600 my-5'>404 Error</h1>
            <button onClick={handalGoBack} className='text-blue-600'>Go Back</button>
        </div>
    );
};

export default Errorpage;