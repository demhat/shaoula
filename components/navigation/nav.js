import React from 'react'
import { useRouter } from 'next/router'
import { withTranslation } from 'i18n'

import styles from './style.module.scss'
import { NAVS } from '../../constants'

import Button from '../buttons'

function Nav({ t }) {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      {NAVS.map((nav) => {
        const active = router.pathname === nav.href
        return (
          <Button
            title={nav.title}
            key={nav.title}
            href={nav.href}
            className={active && 'active'}
            {...nav.props}
          >
            {t(nav.title)}
          </Button>
        )
      })}
    </nav>
  )
}

export default withTranslation('common')(Nav)
