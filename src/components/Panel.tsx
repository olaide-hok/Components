import classNames from 'classnames'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  [rest: string]: any
}

const Panel = ({children, className, ...rest}: Props) => {
  const finalClassNames = classNames(
    'border rounded p-3 bg-white w-full',
    className
  )
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  )
}

export default Panel
