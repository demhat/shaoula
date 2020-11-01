import React from 'react'
import { useRouter } from 'next/router'
import { withTranslation } from 'i18n'

import styles from './style.module.scss'
import { NAVS } from '../../constants'

import Button from '../buttons'

function Nav({ t, i18n }) {
  const router = useRouter()
  return (
    <nav className={styles.nav}>
      {NAVS.map((nav) => {
        const active = router.pathname === nav.href
        return (
          <Button
            title={nav.name}
            key={nav.href}
            href={nav.href}
            lng={i18n.language}
            className={active && 'active'}
          >
            {t(nav.name)}
          </Button>
        )
      })}
    </nav>
  )
}

export default withTranslation('common')(Nav)
