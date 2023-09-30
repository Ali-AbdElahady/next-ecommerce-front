
import React from 'react'
import classes from './primaryBtn.module.css'
function PrimaryBtn({children,btnClasses,onClick}) {
  return <button onClick={onClick} className={`${classes.primaryBtn} ${btnClasses}`}>{children}</button>;
}

export default PrimaryBtn