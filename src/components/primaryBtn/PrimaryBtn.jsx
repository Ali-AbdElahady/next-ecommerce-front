import React from 'react'
import classes from './primaryBtn.module.css'
function PrimaryBtn({children,rest}) {
  return <button {...rest} className={classes.primaryBtn}>{children}</button>;
}

export default PrimaryBtn