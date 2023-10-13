import React, { Children } from 'react'
import styles from './Input.module.css'

function Input(props) {
  return (
    <input className={`${props.classes} ${styles.Input}`} {...props}>{props.children}</input>
  )
}

export default Input