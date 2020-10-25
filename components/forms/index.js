import React from 'react'

import styles from './style.module.scss'

function Form({ children }) {
  return (
    <div className={styles.form}>
      <form>{children}</form>
    </div>
  )
}

export default Form
