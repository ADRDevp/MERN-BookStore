import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [message, setMessage] = useState('')
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Login</h2>

            <form>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' 
                    htmlFor="email">Email</label>
                    <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' 
                    htmlFor="Password">Password</label>
                    <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    />
                </div>
                {message && <p className='text-red-500 text-sm mb-4'>{message}</p>}
                <div>
                    <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                    >
                      Login
                    </button>
                </div>
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Haven&apos;t registered yet? Please 
            <Link to="/register" className='text-blue-500 hover:text-blue-700'> register</Link></p>
        </div>
    </div>
  )
}

export default Login