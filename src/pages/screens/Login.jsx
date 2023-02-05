import React from "react";
import { useState, useEffect, useRef } from "react";
import { handleRequest, storeData } from "../config/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../config/styles/style.css'
import { Link, redirect } from "react-router-dom";


export default function Register() {
    const [loginData, setLoginData] = useState({})
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    if (localStorage.getItem("mfc")){
        window.location = '/'
    }
    if (loginData?.data){
        storeData(loginData.data)
       window.location= '/'
    }

    return(
        <div className="container">
           
           <br />
           <h3>User Login</h3>
           {/* <input className="form-control col-lg-4" type = "text" ref={nameRef} placeholder="Email" value={nameRef?.current?.value} /> */}
           <input className="form-control col-lg-4" type = "email" ref={emailRef} placeholder="Email Address" />
           <input className="form-control col-lg-4" type = "password" placeholder="Password" ref={passwordRef} />
           <button className="btn btn-lg btn-primary" onClick={()=>handleRequest(setLoginData, JSON.stringify({"email":emailRef.current.value, "password":passwordRef.current.value}), "/api/login")}>Login</button> {'\u00A0'}
           <button className="btn btn-lg btn-info"><Link to="/register" style={{color:"white", textDecoration:"none"}}>Register</Link></button>
           {/* {console.log(, {"email":emailRef.current.value, "password":passwordRef.current.value})} */}

        </div>


    )
}