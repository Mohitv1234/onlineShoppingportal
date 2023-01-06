import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/register.css"

export default function Register() {
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    
   const handleChange = (event) => {
    setname(event.target.value);
    setemail(event.target.value);
    setpassword(event.target.value);
    console.log(event);
}
    
   const handleSubmit = (event) => {
        console.log(event);
        alert('A form was submitted: ');
    
        fetch('http://localhost:4000/api/v1/register', {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify({
                name
            })
            
          }).then(function(response) {
            console.log(response)
            return response.json();
          });
    
        event.preventDefault();
    }

  return (
    <div class="login-form-bd">
    <div class="form-wrapper">
      <div class="regrapcon">
        <h1> Register Now</h1>
        <form>
        <div class="form-control">
            <input type="text" onChange={(e)=>{setname(e.target.value)}} value={name} placeholder='Name' required/>
          </div>
          <div class="form-control">
            <input type="email" onChange={(e)=>{setemail(e.target.value)}} value={email} placeholder='Email' required/>
          </div>
  
          <div class="form-control">
            <input type="password"onChange={(e)=>{setpassword(e.target.value); console.log(name,email,password);}} value={password} placeholder='Password' required/>
          </div>
          <button onClick={handleSubmit} class="reg-btn">Register Now</button>
          <p class="text">Have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  </div>
  )
}
