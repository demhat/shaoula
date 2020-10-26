import React from 'react'

import styles from './style.module.scss'

function Alert({ children, ...props }) {
  return (
    <div className={styles.alert} {...props}>
      {children}
    </div>
  )
}

export default Alert
