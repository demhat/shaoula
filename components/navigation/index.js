import React, { useState } from 'react'
import Shaoula from '../shaoula'
import Link from 'next/link'
import cn from 'classnames'
import { useRouter } from 'next/router'

import useWindowSize from 'hooks/useWindowSize'
import styles from './style.module.scss'

import CONST, { NAVS } from 'constants/index'
import Button from '../buttons'
import { Bars } from '../icons'
import IconButton from '../buttons/icon'
import Drawer from './drawer'

function Index() {
  const router = useRouter()
  const size = useWindowSize()
  const [drawer, setDrawer] = useState(false)
  console.log(drawer)

  return (
    <div className={styles.navbar}>
      <div className={cn('container', styles.container)}>
        <Link href="/">
          <a>
            <Shaoula />
          </a>
        </Link>
        {size.width > CONST.MD ? (
          <nav className={styles.nav}>
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
        ) : (
          <div>
            <IconButton onClick={() => setDrawer(!drawer)}>
              <Bars />
            </IconButton>
            <Drawer active={drawer} onClick={() => setDrawer(!drawer)} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Index
