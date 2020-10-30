import React, { Fragment, useState } from 'react'
import Shaoula from '../shaoula'
import cn from 'classnames'
import { Link } from 'i18n'

import useWindowSize from 'hooks/useWindowSize'
import styles from './style.module.scss'

import CONST from 'constants/index'
import { Bars } from '../icons'
import IconButton from '../buttons/icon'
import Drawer from './drawer'
import Nav from './nav'

function Navbar() {
  const size = useWindowSize()
  const [drawer, setDrawer] = useState(false)
  return (
    <div className={styles.navbar}>
      <div className={cn('container', styles.container)}>
        <Link href="/">
          <a>
            <Shaoula />
          </a>
        </Link>
        {size.width > CONST.MD && <Nav />}
        {size.width < CONST.MD && (
          <Fragment>
            <IconButton onClick={() => setDrawer(!drawer)}>
              <Bars />
            </IconButton>
            <Drawer active={drawer} onClick={() => setDrawer(!drawer)} />
          </Fragment>
        )}
      </div>
    </div>
  )
}

export default Navbar
