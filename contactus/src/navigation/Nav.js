import React from 'react'
import styles from './nav.module.css'
import logo from '../assests/logo.png'
export default function Nav() {
  return (
    <div className={styles.navigation}>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
    </div>
  )
}
