import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

function Input({ ...props }) {
  return (
    <input
      className={cn(styles.input, styles.formControl)}
      type="text"
      {...props}
    />
  )
}

export default Input
