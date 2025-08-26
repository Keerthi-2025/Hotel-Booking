import React from 'react'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        SignUp
      </h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' 
        className='border-2 rounded-lg p-2' id="username"/>

        <input type='email' placeholder='email'
        className='border-2 rounded-lg p-2' id="email"/>

        <input type= "password" placeholder='password'
        className='border-2 p-2 rounded-lg' id="password"/>

        <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-80'>Sign Up</button>
      </form>
    </div>
  )
}
