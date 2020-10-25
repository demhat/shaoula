import React from 'react'
import Link from 'next/link'
import cn from 'classnames'

import styles from './style.module.scss'
import './style.module.scss'

function LinkButton({ href, children, className, button, ...props }) {
  const classnames = button ? '' : styles.linkButton
  return (
    <Link href={href}>
      <a className={cn(classnames, className)} {...props}>
        {children}
      </a>
    </Link>
  )
}

function BaseButton({ children, ...props }) {
  return (
    <button {...props} type="button">
      {children}
    </button>
  )
}

function Button({ children, className, ...props }) {
  const Comp = props.href ? LinkButton : BaseButton

  return (
    <Comp className={cn(styles.button, className)} {...props}>
      {children}
    </Comp>
  )
}

export default Button
