import React from 'react'
import cn from 'classnames'
import { Link } from 'i18n'

import styles from './style.module.scss'
import './style.module.scss'

function LinkButton({ href, lng, children, className, button, ...props }) {
  const classnames = button ? '' : styles.linkButton
  return (
    <Link href={href} lng={lng}>
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
