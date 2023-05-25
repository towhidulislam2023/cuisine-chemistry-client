/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { FaExclamation } from 'react-icons/fa';

const EmailPAssword = () => {
    // use in login layout 
    const [error, setError] = useState("")
    const { loginUser }=useContext(AuthProviderContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/" 
    const handelLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const passsword = form.password.value
        loginUser(email,passsword)
        .then(result=>{
            navigate(from, { replace: true })
            setError("")

        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
        })
        form.reset()

    }
    return (
        <>
            < div className='mt-10 h-fit md:w-[30%] mx-auto px-5'>
                <div className='border border-black px-9 py-2 rounded-md border-opacity-60'>
                    <h5 className='text-2xl mt-2 font-bold'>Login</h5>
                    <div className="errorShowSection mt-5 flex items-center">
                        {error
                            &&
                            <FaExclamation className='text-red-900 text-4xl'></FaExclamation>}
                        <p className='text-red-800'>{error}</p>

                    </div>
                    <form onSubmit={handelLogin} className='my-12'>
                        <input className='border-l-none border-b-2 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email" required name='email' placeholder='Username or Email' />
                        <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='password' placeholder='Passowrd' />
                        <div className='mt-5 flex items-center justify-between'>
                            <div>
                                <input type="checkbox" name="checkbox" id="" /> <span className='ml-2'>Remember me</span>
                            </div>
                            <div>
                                <Link className='underline text-yellow-500'> <p className='text-yellow-600'>Forgot Password</p></Link>
                            </div>

                        </div>
                        <button className='btn w-[100%] mx-auto btn-warning mt-10'>Login
                        </button>
                        <p className='text-center my-4'>Dont have an Account ? <Link className='underline text-yellow-600 ' to={'/registar'}>Create an account</Link> </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EmailPAssword;