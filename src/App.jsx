import {BrowserRouter, Route, Routes,} from "react-router-dom";

import "./index.css";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Header from "./components/Header";
export default function () {
  return (
  
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path ="about" element = {<About/>} />
    <Route path = "/" element = {<Home/>}/>
    <Route path ="profile" element = {<Profile/>} />
    <Route path = "signin" element = {<SignIn/>}/>
    <Route path ="signup" element = {<SignUp/>} />
   


  </Routes>
  
  
  </BrowserRouter>

  )
}


