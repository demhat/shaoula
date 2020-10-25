import React from 'react'
import { RightArrow } from '../icons'

import styles from './cmd.module.scss'

function Cmd({ children }) {
  return (
    <div className={styles.command}>
      <RightArrow />
      <code className={styles.code}>{children}</code>
    </div>
  )
}

export default Cmd
