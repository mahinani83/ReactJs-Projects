import React from 'react'
import '../App.css'
export default function NavaBar() {
  return (
    <nav>
    <div className='logo'>
    <img src='/images/logo.png' alt="logo" />
    </div>
    <ul>
      <li href='#'><a href="#">Menu</a></li>
      <li href='#'><a href="#">Location</a></li>
      <li href='#'><a href="#">About</a></li>
      <li href='#'><a href="#">Contact</a></li>
    </ul>
    <button>login</button>
  </nav>
  )
}
