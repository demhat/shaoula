import React, { Fragment, useState } from 'react'
import Shaoula from '../shaoula'
import cn from 'classnames'
import { Link } from 'i18n'

import useWindowSize from 'hooks/useWindowSize'
import styles from './style.module.scss'

import CONST from 'constants'
import { Bars } from '../icons'
import IconButton from '../buttons/icon'
import Drawer from './drawer'
import Nav from './nav'

function Navbar() {
  const size = useWindowSize()
  const [drawer, setDrawer] = useState(false)
  const hamburgerMenu = size.width < CONST.MD
  return (
    <header className={styles.navbar}>
      <div className={cn('container', styles.container)}>
        <Link href="/">
          <a title="Shaoula" tabIndex="0">
            <Shaoula />
          </a>
        </Link>
        <a className={styles.skipLink} href="#main">
          Skip to main
        </a>
        {!hamburgerMenu && <Nav />}
        {hamburgerMenu && (
          <Fragment>
            <IconButton onClick={() => setDrawer(!drawer)}>
              <Bars />
            </IconButton>
            <Drawer active={drawer} onClick={() => setDrawer(!drawer)} />
          </Fragment>
        )}
      </div>
    </header>
  )
}

export default Navbar
