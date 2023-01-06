import React, { useState } from 'react'
import "../style/login.css"
import {  Link } from "react-router-dom";
export default function Login() {
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");

    

    const handleSubmit = (event) => {
        console.log(event);
        alert('A form was submitted: ');
    
        fetch('http://localhost:4000/api/v1/login', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: {
                email:email,password:password
            }
            
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }

    return (
        <div class="login-form-bd">
  <div class="form-wrapper">
    <div class="form-container">
      <h1> Please Login</h1>
      <form>
         <div class="form-control">
            <input type="email" onChange={(e)=>{setemail(e.target.value)}} value={email} placeholder='Email' required/>
          </div>
  
          <div class="form-control">
            <input type="password"onChange={(e)=>{setpassword(e.target.value)}} value={password} placeholder='Password' required/>
          </div>
        <button onClick={handleSubmit} class="login-btn">Login</button>
        <p class="text">Don't have an account? <a href="/register"> Register</a></p>
      </form>
    </div>
  </div>
</div>
    )
}
