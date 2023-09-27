import React from 'react'
import classes from './PrimaryBtn.module.css'
function PrimaryBtn({children,rest}) {
  return <button {...rest} className={classes.primarybtn}>{children}</button>;
}

export default PrimaryBtn