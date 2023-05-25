/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../../Provider/AuthProvider/AuthProvider';
import { FaExclamation } from 'react-icons/fa';

const EmailPasswordforReg = () => {
    // use in registar layout 
    const [error, setError] = useState("")
    const { user, updateUserProfile, CreateNewUserWithEmailAndPassword } = useContext(AuthProviderContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/" 
    const handelRegistar = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const passsword = form.password.value
        const ConfirmPasssword = form.ConfirmPassword.value
        const photoUrl = form.photoUrl.value
        console.log(photoUrl);
        if (email === ""){
            setError('A user cannot submit empty email fields')
            return
        }
        else if (passsword === "") {
            setError('A user cannot submit empty password fields')
            return
        }
        else if (passsword !== ConfirmPasssword) {
            setError('Password not match')
            return 
        }
        else if (passsword.length < 6) {
            setError('The password is less than 6 characters')
            return
        }

        CreateNewUserWithEmailAndPassword(email, passsword)
            .then(result => {
                updateUserProfile(name,photoUrl)
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            })
        form.reset()
    }
    return (
        <div className='my-12 md:w-[30%] mx-auto px-5'>
            <div className='border border-black px-9 py-2 rounded-md border-opacity-60'>
                <h5 className='text-2xl mt-2 font-bold'>Registar </h5>
                <div className="errorShowSection mt-5 flex items-center">
                    {error 
                    && 
                    <FaExclamation className='text-red-900 text-4xl'></FaExclamation>}
                    <p className='text-red-800'>{error}</p>

                </div>
                <form onSubmit={handelRegistar} className='my-12'>
                    <input className='border-l-none border-b-2 border-black border-opacity-5 py-3 outline-none w-full text-black' type="name" required name='name' placeholder='Your Name' />

                    <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="email"   required name='email' placeholder='Username or Email' />

                    <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="text" name='photoUrl' required placeholder='PhotoURL' />

                    <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='password' placeholder='Passowrd' />

                    <input className='border-l-none border-b-2 mt-10 border-black border-opacity-5 py-3 outline-none w-full text-black' type="password" required name='ConfirmPassword' placeholder='Confirm Passowrd' />

                    <div className='mt-5 flex items-center justify-end'>
                        <div>
                            <Link className='underline text-yellow-500'> <p className='text-yellow-600'>Forgot Password</p></Link>
                        </div>

                    </div>
                    <button className='btn w-[100%] mx-auto btn-warning mt-10'>Registar
                    </button>
                    <p className='text-center my-4'>Alrady have an account ? <Link className='underline text-yellow-600 ' to={'/login'}>Please Login</Link> </p>
                </form>
            </div>
            <div className='h-10 '>
            </div>
        </div>
    );
};

export default EmailPasswordforReg;