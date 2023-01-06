import React from 'react'
import {  Link } from "react-router-dom";

export default function nav() {
  return (
    <div className = 'nav'>
        <Link to ="/login">Login</Link>
    </div>
  )
}
