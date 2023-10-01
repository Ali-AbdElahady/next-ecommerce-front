import React, { Children } from 'react'
import styles from './Input.module.css'

function Input({children,classes}) {
  return (
    <input className={`${classes} ${styles.Input}`}>{children}</input>
  )
}

export default Input