import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

import Button from './index'

function IconButton({ className, children, ...props }) {
  return (
    <Button
      className={cn(styles.iconButton, className)}
      aria-label="icon-button"
      {...props}
    >
      {children}
    </Button>
  )
}

export default IconButton
