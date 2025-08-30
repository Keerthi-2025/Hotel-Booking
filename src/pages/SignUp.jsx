import  { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth';


export default function SignUp() {
  const [formdata ,setformdata] = useState({});
  const [error , setError]= useState(null);
  const [loading , setLoading]= useState(false);
  const navigate = useNavigate();

  
  const handleChange = (e)=>{
    setformdata({
      ...formdata,
      [e.target.id] : e.target.value,
    });

  };

  const handleSubmit = async(e) =>{
    e.preventDefault();      //prevents page refreshing
    try{

        setLoading(true);
    const res = await fetch('api/auth/signup',
      {
      
        method : 'POST',
      headers :{
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify(formdata),
  });
  const data = await await res.json();
  if(data.success == false){
    setLoading(false);
    setError(data.message);
    return
  }
  setLoading(false);
  setError(null);
  navigate('/signin');
  //console.log(data);
    }catch(error){
      setLoading(false);
      setError(error.message);
    }    
  

  }
  console.log(formdata);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        SignUp
      </h1>
      <form onSubmit = {handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='username' 
        className='border-2 rounded-lg p-2' id="username" onChange={handleChange}/>

        <input type='email' placeholder='email'
        className='border-2 rounded-lg p-2' id="email" onChange={handleChange}/>

        <input type= "password" placeholder='password'
        className='border-2 p-2 rounded-lg' id="password" onChange={handleChange}/>

        <button disabled ={loading} className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-80'>{loading ? 'Loading...' : "Sign Up"}</button>
        <OAuth/>
      </form>

      <div className='flex gap-2 mt-4'>
        <p>
          Have an account?
          <Link to ={"/signin"}>
          <span className='text-blue700'>Sign in</span>
          </Link>
        </p>
      </div>
      {error && <p className='text-red mt-5'>{error}</p>}
    </div>
  )
}
