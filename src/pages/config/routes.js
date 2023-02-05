import {BrowserRouter, Routes, Route} from "react-router-dom";
import Register from "../screens/Register"
import Login from "../screens/Login";
import Home from "../screens/Home";

export default function PageRoutes(){
    return(
    <BrowserRouter>
     
     <Routes> 
    <Route path="/" element={<Home /> } /> 
    <Route path="/login" element={<Login /> } /> 
    <Route path="/register" element={<Register />} />
    </Routes> 
    
    </BrowserRouter>
    )
}



