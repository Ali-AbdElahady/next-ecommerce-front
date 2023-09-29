import Link from 'next/link'
import React from 'react'
import classes from './PrimaryBtn.module.css'

function PrimaryLink({children,href}) {
  return (
    <Link href={href} className={classes.primaryLink}>{children}</Link>
  )
}

export default PrimaryLink