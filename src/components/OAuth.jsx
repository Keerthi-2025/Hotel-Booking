import React from 'react'

export default function OAuth() {

  const handleGoogleClick = async () =>{
    try{

    }catch(error){
      console.log("Could not sign in with the Google",error);
    }
  }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-800 text-white p-3 rounded-lg uppercase hover:opacity-60 '>Continue with Google</button>
  )
}
