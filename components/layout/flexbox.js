import React from 'react'
import cn from 'classnames'

import styles from './style.module.scss'
import './style.module.scss'

function Flexbox({ className, children, ...props }) {
  return (
    <div className={cn(styles.flexbox)} {...props}>
      {children}
    </div>
  )
}

export default Flexbox
