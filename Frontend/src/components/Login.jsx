import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>Sign Up</h1>
            <p className='text-sm'>Welcome Back! Please Sign In to Continue</p>
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.profile_icon} width={22}/>
                <input type='text' placeholder='Full Name' className='outline-none text-sm' required/>
            </div>
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.email_icon}/>
                <input type='email' placeholder='Email id' className='outline-none text-sm' required/>
            </div>
            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                <img src={assets.lock_icon}/>
                <input type='password' placeholder='Password' className='outline-none text-sm' required/>
            </div>
            <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
            <button className='bg-blue-600 w-full text-white py-2 rounded-full'>create Account</button>
        </form>
    </div>
  )
}

export default Login