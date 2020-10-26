import React from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'

import styles from 'components/navigation/style.module.scss'
import { NAVS } from '../../constants'
import Button from '../buttons'
import Shaoula from '../shaoula'
import IconButton from '../buttons/icon'
import { Cross } from '../icons'
import Nav from './nav'

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
        <Nav />
      </div>
    </div>
  )
}

export default Drawer
