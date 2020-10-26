import React from 'react'
import { useRouter } from 'next/router'

import styles from './style.module.scss'
import { NAVS } from '../../constants'

import Button from '../buttons'

function Nav({ ...props }) {
  const router = useRouter()
  return (
    <nav className={styles.nav} {...props}>
      {NAVS.map((nav) => {
        const active = router.pathname === nav.href
        return (
          <Button
            key={nav.title}
            href={nav.href}
            className={active && 'active'}
            {...nav.props}
          >
            {nav.title}
          </Button>
        )
      })}
    </nav>
  )
}

export default Nav
