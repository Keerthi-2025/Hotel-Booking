import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formdata, setformdata] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents page refresh
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  console.log(formdata);

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          className='border-2 rounded-lg p-2'
          id='username'
          onChange={handleChange}
        />

        <input
          type='email'
          placeholder='Email'
          className='border-2 rounded-lg p-2'
          id='email'
          onChange={handleChange}
        />

        <input
          type='password'
          placeholder='Password'
          className='border-2 p-2 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-80'>
          Sign Up
        </button>
      </form>

      <div className='flex gap-2 mt-4'>
        <p>
          Have an account?{' '}
          <Link to={'/SignIn'}>
            <span className='text-blue-700'>Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
