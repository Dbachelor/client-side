import React from "react";
import {useRef, useState} from "react";
import { handleRequest } from "../config/helpers";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../config/styles/style.css'
import { Link, redirect } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
    const [isRegistered, setIsRegistered] = useState({});    
    const nameRef = useRef(null);
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [show, setShow] = useState(false)
    if (isRegistered?.status == 1){
        Swal.fire({
            title: "Success",
            text: isRegistered.message,
            icon: "success",
            confirmButtonText: "OK",
          }).then(function () {
            window.location = "/login";
          });;
    }else if(isRegistered?.status == 0){
        Swal.fire({
            title: "Error",
            text: isRegistered.message,
            icon: "error",
            confirmButtonText: "OK",
          });
       
    }

    return(
        <div className="container">
           <h2>My Fuel Credit</h2>
           <br />
           <h2>Register with us</h2>
           <input className="form-control col-lg-4" type = "text" ref={nameRef} placeholder="Enter Your Fullname" />
           <input className="form-control col-lg-4" type = "email" ref={emailRef} placeholder="Enter Your Email Address" />
           <input className="form-control col-lg-4" type = "password" ref={passwordRef} placeholder="Password" />
           <button className="btn btn-lg btn-primary" onClick={ ()=>handleRequest(setIsRegistered, JSON.stringify({email: emailRef?.current?.value, name:nameRef?.current?.value, password:passwordRef?.current?.value}), '/api/register')}>Register</button> {'\u00A0'}
           <button className="btn btn-lg btn-info"><Link to="/login" style={{color:"white", textDecoration:"none"}}>Login</Link></button>

        </div>


    )
}