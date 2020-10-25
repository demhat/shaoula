import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'

function Textarea({ ...props }) {
  return (
    <div className={cn(styles.textarea, styles.formControl)}>
      <textarea {...props}></textarea>
    </div>
  )
}

export default Textarea
