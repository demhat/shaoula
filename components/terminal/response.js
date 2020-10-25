import React from 'react'

import styles from './cmd.module.scss'

function Response({ children, ...props }) {
  return (
    <div className={styles.response} {...props}>
      <code>{children}</code>
    </div>
  )
}

export default Response
