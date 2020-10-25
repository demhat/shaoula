import React from 'react'
import cn from 'classnames'

function Col({ className, children, ...props }) {
  return (
    <div className={cn(className, !className && 'col')} {...props}>
      {children}
    </div>
  )
}

export default Col
