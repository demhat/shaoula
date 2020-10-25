import React from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import styles from 'components/navigation/style.module.scss'
import { NAVS } from '../../constants'
import Button from '../buttons'
import Shaoula from '../shaoula'
import IconButton from '../buttons/icon'
import { Cross } from '../icons'

function Drawer({ children, active, onClick, ...props }) {
  const router = useRouter()
  return (
    <div
      className={cn(styles.drawer, active && styles.drawerActive)}
      {...props}
    >
      <div className="container">
        <IconButton onClick={onClick} className={styles.drawerCross}>
          <Cross />
        </IconButton>
        <Shaoula size={1.5} />
        <nav className={styles.drawerNav}>
          {NAVS.map((nav) => {
            const active = router.pathname === nav.href
            return (
              <Button key={nav.title} href={nav.href} {...nav.props}>
                {nav.title}
              </Button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Drawer
