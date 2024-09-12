import React from 'react'
import styles from './navigation.module.css'
export default function Navigation() {
    console.log(styles);
  return (
    
    <div className={styles.navigation}>
    it is navigation
        <div className={styles.insideDiv}>it is inside div</div>
    </div>
  )
}
