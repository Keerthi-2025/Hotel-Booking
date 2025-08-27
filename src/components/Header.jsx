import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='bg-slate-700 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
         <Link to="/">
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
          <span className='text-black'>Real</span>
          <span className='text-black'>Estate</span>
        </h1>
        </Link>

        <form className='relative text-white bg-transparent rounded-lg'>
          <input 
            type="text" 
            placeholder='Search..' 
            className='pl-3 pr-10 py-2 rounded-lg bg-slate-600 text-white outline-none w-64 focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white' />
        </form>
        <ul className="flex gap-4">
            <Link to ="/">
            <li className=" text-black hidden sm:inline hover:underline">Home</li>
             </Link>

             <Link to ="/About">
            <li className=" text-black hover:underline">About</li>
             </Link>

             <Link to ="/signin">
            <li className=" text-black hover:underline">SignIn</li>
             </Link>
        </ul>
      </div>
    </header>
  );
}
